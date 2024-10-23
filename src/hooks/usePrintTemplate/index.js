import { useState, useEffect } from 'react';

export const usePrintTemplate = () => {
  const [isPrintingTemplate, setIsPrintingTemplate] = useState(false);
  
  useEffect(() => {
    let isHandlingPrint = false;
    console.log(isPrintingTemplate)
    const handleBeforePrint = () => {
      if (isPrintingTemplate && !isHandlingPrint) {
        isHandlingPrint = true;
        document.body.classList.add('printing-template');
      }
    };
    
    const handleAfterPrint = () => {
      if (isHandlingPrint) {
        document.body.classList.remove('printing-template');
        isHandlingPrint = false;
        setTimeout(() => {
          setIsPrintingTemplate(false);
        }, 0);
      }
    };
    
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [isPrintingTemplate]);
  
  return [isPrintingTemplate, setIsPrintingTemplate];
};
