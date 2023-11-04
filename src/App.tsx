import { useEffect, useRef, useState } from "react";
import sample from "./components/Sample";
import Form from "./components/Form";
import Dialog from "./components/Dialog";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function closeModal() {
    if (!dialogRef.current) return;
    dialogRef.current.close();
    setName("");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!dialogRef.current) return;
    dialogRef.current.showModal();
  }

  return (
    <main>
      <Form
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        ref={inputRef}
      />
      <Dialog closeModal={closeModal} ref={dialogRef}>
        <p>Your name is {name}</p>
      </Dialog>
    </main>
  );
}

export default App;
