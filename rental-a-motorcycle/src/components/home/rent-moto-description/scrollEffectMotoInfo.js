import { useEffect } from 'react';

export default function ScrollEffectMotoInfo() {
    useEffect(() => {
      const boxes = document.querySelectorAll('.box');
  
      const checkBoxes = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        boxes.forEach((box) => {
          const boxTop = box.getBoundingClientRect().top;
          if (boxTop < triggerBottom) {
            box.classList.add('show');
          } else {
            box.classList.remove('show');
          }
        });
      };
  
      window.addEventListener('scroll', checkBoxes);
      checkBoxes(); // Call immediately to check if the boxes should be shown on page load
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', checkBoxes);
      };
    }, []
)};