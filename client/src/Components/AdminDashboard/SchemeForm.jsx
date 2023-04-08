import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

export const SchemeForm = () => {
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
      <button onClick={openModal}>Add Schemes</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Schemes</h2>
        <button onClick={closeModal}></button>
        <div className="text-xl font-bold">Add Schemes</div>
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
              Service Name
            </label>
            <input
              type="text"
              id="name"
              placeholder={"Service 1"}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div className="flex flex-row-reverse justify-around items-center p-2">
            <button
              type="submit"
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
