import { forwardRef } from "react";

interface DialogProps {
  closeModal: () => void;
  children: React.ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, closeModal }, ref) => {
    return (
      <dialog ref={ref}>
        <h2>Info In here</h2>
        {children}
        <button onClick={closeModal}>Close</button>
      </dialog>
    );
  }
);
export default Dialog;
