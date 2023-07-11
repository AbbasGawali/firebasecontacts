import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
// import * as Yup from "yup";
import * as Yup from "yup";

const contactScheemaValidation = Yup.object().shape({
  name: Yup.string().required("Field is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddUpdate = ({ isOpen, onClose, isUpdate, id, name, email }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen ? (
        <div>
          <Modal isOpen={open} onClose={onClose}>
            <Formik
              validationSchema={contactScheemaValidation}
              initialValues={
                isUpdate
                  ? {
                      name: name,
                      email: email,
                    }
                  : {
                      name: "",
                      email: "",
                    }
              }
              onSubmit={(values) => {
                console.log(values);
                isUpdate ? updateContact(values, id) : addContact(values);
              }}
            >
              <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name</label>
                  <Field className="border p-1" name={"name"} />
                  <div className="">
                    <ErrorMessage
                      className="text-red-500 text-xs"
                      name="name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <Field className="border p-1" type="email" name={"email"} />
                  <div className="">
                    <ErrorMessage
                      className="text-red-500 text-xs"
                      name="email"
                    />
                  </div>
                </div>
                <button className="bg-orange px-3 py-1.5 border self-end">
                  {isUpdate ? "Update " : "Add Contact"}
                </button>
              </Form>
            </Formik>
          </Modal>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddUpdate;
