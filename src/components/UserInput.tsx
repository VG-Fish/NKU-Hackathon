import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Alert from "./Alert";

interface UserInputProps {
  inputVisible: boolean;
  setInputVisibility: Dispatch<SetStateAction<boolean>>;
}

function UserInput({ inputVisible, setInputVisibility }: UserInputProps) {
  const [inputValue, setInputValue] = useState("");

  let userInput: string = "";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    userInput = inputValue;
    setInputVisibility(false);
  };

  return (
    <>
      {inputVisible && (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter text here"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {!inputVisible && (
        <Alert alertType="secondary" closeable={false}>
          {`User: ${inputValue}`}
        </Alert>
      )}
    </>
  );
}

export default UserInput;
