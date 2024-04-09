import { logoutUser } from "@/store/features/auth/authSlice";
import React, { useState } from "react";
import Modal from "react-modal";

import { useDispatch } from "react-redux";
interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

const AlertModal = ({ isOpen, setIsOpen }: Props) => {
    
  const dispatch = useDispatch()  

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
      
    >
        <div className="grid gap-10">
            <h1>Are you sure you want to logout ?</h1>
            <div className="flex justify-between">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="text-mainBlue">
                    Cancel
                </button>
                <button 
                    onClick={() =>{
                         dispatch(logoutUser())
                         location.href = "/"
                    }}
                    className="bg-orange-500 px-2 py-1 rounded text-white"
                >
                    Logout
                </button>

            </div>

        </div>
    </Modal>
  );
};

export default AlertModal;
