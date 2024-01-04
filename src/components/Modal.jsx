// Modal.js

import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyles = `
    fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    bg-[#EEF5FF] p-8 rounded-md shadow-md
    ${isOpen ? 'block' : 'hidden'}
  `;

  const overlayStyles = `
    fixed top-0 left-0 w-full h-full bg-black opacity-50
    ${isOpen ? 'block' : 'hidden'}
  `;

  const closeBtnStyles = 'cursor-pointer absolute top-4 right-4';

  return (
    <div>
      <div className={overlayStyles} onClick={onClose}></div>
      <div className={modalStyles}>
        <span className={closeBtnStyles} onClick={onClose}>
          &#10005;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
