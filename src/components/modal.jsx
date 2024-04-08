import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };

  return (
    <>
      <button onClick={handleClick}>{isOpen ? 'Close Modal' : 'Open Modal'}</button>
      {isOpen && ( // Conditionally render the modal
        <div className="flex justify-center items-center top-0 right-0 z-[1000] w-full h-[100vh] bg-[#1d3443">
          <div className="modal-content p-4 text-center bg-slate-400 text-blue-600">
            <p>This is the modal content.</p>
            <button onClick={handleClick}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
