import React from "react";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddUpdate from "./AddUpdate";
import useDisclouse from "../hooks/useDisclouse";

const UserData = ({ id, name, email }) => {
  const { open, onOpen, onClose } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={id}
        className="bg-yellow mt-4 flex justify-between p-2 rounded-lg"
      >
        <div className="flex gap-1 items-center">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className=" ">
            <h2 className="font-medium">{name}</h2>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddUpdate
        id={id}
        name={name}
        email={email} 
        isUpdate
        isOpen={open}
        onClose={onClose}
      />
    </>
  );
};

export default UserData;
