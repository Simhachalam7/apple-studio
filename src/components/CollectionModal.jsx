import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const modalStyles = `
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-top: 80px; 
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  cursor:pointer;
}
li:hover {
  color: #535bf2;
  font-weight:solid;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = modalStyles;
document.head.appendChild(styleSheet);

const CollectionModal = ({ show, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && event.target.className === "modal-overlay") {
        onClose();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ul>
          <li>Apple Watch Series 10</li>
          <li>Apple Watch Hermes Series 10</li>
          <li>Apple Watch SE</li>
        </ul>
       
      </motion.div>
    </motion.div>
  );
};

export default CollectionModal;
