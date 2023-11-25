import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    function setButtonHeight() {
      const buttons = document.querySelectorAll('.react-calendar__tile');
      buttons.forEach((button) => {
        const buttonWidth = button.offsetWidth;
        button.style.height = `${buttonWidth}px`;
      });
    }

    const observerCallback = () => {
      setButtonHeight();
    };

    const observer = new MutationObserver(observerCallback);

    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      observer.observe(bodyElement, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Calendar onChange={setValue} value={value} className='react-calendar'/>
    </>
  );
};

export default CalendarComponent;
