import { useEffect, useRef, useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name Name</label>
        <input
          type="text"
          ref={inputRef}
          name="name"
          id="name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <input type="submit" />
      </form>
      <dialog ref={dialogRef}>
        <h2>Info In here</h2>
        <p>Your name is {name}</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </main>
  );
}

export default App;
