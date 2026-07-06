import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, shouldType: boolean) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!shouldType) {
      setDisplayedText(text);
      return;
    }

    setDisplayedText('');
    let index = 0;
    let isCancelled = false;

    const typeCharacter = () => {
      if (index < text.length && !isCancelled) {
        setDisplayedText(text.substring(0, index + 3));
        index += 3;
        
        const delay = Math.floor(Math.random() * 10) + 5;
        setTimeout(typeCharacter, delay);
      } else if (index >= text.length) {
        setDisplayedText(text);
      }
    };

    typeCharacter();
    return () => { isCancelled = true; };
  }, [text, shouldType]);

  return { displayedText };
};