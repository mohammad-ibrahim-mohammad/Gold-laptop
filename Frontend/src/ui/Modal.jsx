import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 z-100 h-screen w-full zoom-100 backdrop-blur-sm transition-all duration-300">
      <div className="bg-gray-0 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform rounded-lg px-4 py-3.5 shadow-lg transition-all duration-500">
        <button
          onClick={close}
          className="b-0 absolute top-1.5 right-2 translate-x-1 transform rounded-sm border-0 p-0.5 transition-all duration-200 hover:bg-gray-100"
        >
          x
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
