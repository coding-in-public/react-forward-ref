import { FormEventHandler } from "react";

interface FormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  name: string;
  setName: (name: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Form = ({ handleSubmit, name, setName, inputRef }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
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
  );
};

export default Form;
