import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useStateContext } from "../../context/ind";

export const EventsForm = () => {
  const {connect,address}=useStateContext();
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

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add Events</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Events</h2>
        <button onClick={closeModal}></button>
        <div className="text-xl font-bold">Add Events</div>
        <form
          onSubmit={(e) => {
            closeModal();
          }}
          className="flex flex-col"
        >
          <div className="">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
            >
              Event Name
            </label>
            <input
              type="text"
              id="name"
              placeholder={"Service 1"}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
            >
              Pass Ticket
            </label>
            <input
              type="number"
              id="name"
              placeholder={"Service 1"}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="flex flex-row-reverse justify-around items-center p-2">
            <button
             onClick={()=>{
              
             }}
              className="bg-green-600 p-2 text-xl rounded-md text-white w-1/4"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-[#d9534f] p-2 text-xl rounded-md text-white w-1/4"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
