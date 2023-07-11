import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import UserData from "./components/UserData";
import AddUpdate from "./components/AddUpdate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CNotFound from "./components/CNotFound";
const App = () => {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setData(contactList);
          return contactList;
        });
      } catch (err) {}
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "contacts");
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filterContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setData(filterContacts);
      return filterContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />

        <div className="flex gap-0 md:gap-2 lg:gap-2">
          <div className="flex relative items-center flex-grow ">
            <HiOutlineSearch className=" absolute   text-3xl text-white ml-1 " />
            <input
              type="text"
              onChange={filterContacts}
              className="bg-transparent mr-1 pl-9 flex-grow rounded-md border text-white border-white h-10"
            />
          </div>
          <AiOutlinePlusCircle
            onClick={onOpen}
            className="text-5xl text-white  cursor-pointer"
          />
        </div>

        {data.length <= 0 ? (
          <CNotFound />
        ) : (
          data.map((item, index) => (
            <UserData
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
            />
          ))
        )}
      </div>
      <AddUpdate isOpen={open} onClose={onClose} />
      <ToastContainer />

      {/* <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded px-4 text-white py-2">Abbas Gawali</button> */}
    </>
  );
};

export default App;
