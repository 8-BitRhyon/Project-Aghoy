import { defineConfig } from 'vitest/config';

// All current suites are pure logic (rejects, brands, indicators, support,
// privacy, flags) - none need a DOM. Use the node environment to avoid pulling
// jsdom (which requires a newer Node than CI's Node 20). Component tests, when
// added, can opt into jsdom per-file with a docblock.
export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['**/*.test.{ts,tsx}'],
    css: false,
  },
});
