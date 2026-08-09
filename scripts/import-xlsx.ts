// scripts/import-xlsx.ts - converts a minimal .xlsx workbook to CSV text
// without external dependencies. An .xlsx is a ZIP of XML: we reuse the ZIP
// entry extractor for the sharedStrings.xml and the first worksheet, then walk
// the inline cells. Supports the common Kaggle/research export shapes:
//   - sharedStrings.xml for cell text (the dominant layout)
//   - cell values as <v> for numbers, inline <is><t> for inline strings
// It does NOT support: formulas results caching, merged cells (ignored), or
// multiple worksheets (first sheet only). Throws loudly on unknown shapes.
//
// Used by scripts/import-datasets.ts for sources that ship xlsx.

import { extractArchiveEntry } from "./import-archive.ts";

// Decode XML entities in a cell value.
const decodeXml = (s: string): string =>
  s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");

const toCsvCell = (s: string): string => {
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
};

export const xlsxToCsv = (xlsxPath: string): string => {
  const shared = extractArchiveEntry(xlsxPath, "xl/sharedStrings.xml");
  // shared strings: <si><t>text</t></si> ... may include <r><t> rich runs.
  const sharedStrings: string[] = [];
  const siRe = /<si>([\s\S]*?)<\/si>/g;
  let m: RegExpExecArray | null;
  while ((m = siRe.exec(shared)) !== null) {
    const texts = [...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((x) => decodeXml(x[1]));
    sharedStrings.push(texts.join(""));
  }

  // first sheet: xl/worksheets/sheet1.xml (fall back to the first in the zip).
  let sheetXml = "";
  try {
    sheetXml = extractArchiveEntry(xlsxPath, "xl/worksheets/sheet1.xml");
  } catch {
    throw new Error(`xlsx has no xl/worksheets/sheet1.xml: ${xlsxPath}`);
  }

  // rows: <row ...><c r="A1" t="s"><v>0</v></c>...</row>
  const rows: string[][] = [];
  const rowRe = /<row[^>]*>([\s\S]*?)<\/row>/g;
  while ((m = rowRe.exec(sheetXml)) !== null) {
    const cells: string[] = [];
    const cellRe = /<c r="([A-Z]+)(\d+)"([^>]*)>([\s\S]*?)<\/c>/g;
    let cm: RegExpExecArray | null;
    while ((cm = cellRe.exec(m[1])) !== null) {
      const colLetter = cm[1];
      const colIdx = colLetter.split("").reduce((acc, ch) => acc * 26 + (ch.charCodeAt(0) - 64), 0) - 1;
      const attrs = cm[3];
      const body = cm[4];
      let value = "";
      const vRe = /<v>([\s\S]*?)<\/v>/;
      const isRe = /<is>[\s\S]*?<t[^>]*>([\s\S]*?)<\/t>[\s\S]*?<\/is>/;
      if (/t="s"/.test(attrs)) {
        const v = vRe.exec(body);
        value = v ? sharedStrings[Number(v[1])] ?? "" : "";
      } else if (/t="inlineStr"/.test(attrs)) {
        const t = isRe.exec(body);
        value = t ? decodeXml(t[1]) : "";
      } else {
        const v = vRe.exec(body);
        value = v ? decodeXml(v[1]) : "";
      }
      cells[colIdx] = value;
    }
    rows.push(cells);
  }

  // Filter fully-empty rows; keep the first non-empty row as header.
  const nonEmpty = rows.filter((r) => r.some((c) => c.trim() !== ""));
  return nonEmpty.map((r) => r.map(toCsvCell).join(",")).join("\n") + "\n";
};
