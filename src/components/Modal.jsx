import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen ? (
        <div
          className="grid place-items-center absolute top-0 backdrop-blur z-40 h-screen w-screen"
          
        >
          <div className="min-h-[200px] m-auto min-w-[80%] lg:min-w-[50%]  z-50 relative p-4 bg-white">
            <div className="flex justify-end">
              <AiOutlineCloseCircle
                onClick={onClose}
                className="text-xl cursor-pointer"
              />
            </div>
            {children}
          </div> 
        </div>
      ) : (
        ""
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
