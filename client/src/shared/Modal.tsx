import {  type ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClick?: () => void;
  isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  console.log(isOpen)
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black/50 rounded-lg">
      <div className=" relative bg-white text-black w-md rounded-md">
        {/* <h1>Do you want to allow downloads on "" </h1> */}
        {children}
        {/* <button className="text-black" onClick={onClick}>
          Cancle
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
