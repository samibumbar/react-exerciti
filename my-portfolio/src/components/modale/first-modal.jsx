import { useState } from "react";
import "./index.css";

function FirstModal() {
  const [isModalOpen, setIsOpenModal] = useState(false);
  function openModal() {
    setIsOpenModal(true);
  }
  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <div className="container">
      <div onClick={openModal}>
        <h1>My first Modal</h1>
        {/* <button>OpenModal</button> */}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div>
            <h2>Here is there modal</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              velit neque dolore illum recusandae officia sint aliquid quisquam.
              Praesentium magnam nesciunt facere deserunt dignissimos ipsa culpa
              magni molestias dolorem beatae.
            </p>
            <button onClick={closeModal}>CloseModal</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default FirstModal;
