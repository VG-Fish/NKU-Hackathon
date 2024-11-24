import { useState } from "react";
import Alert from "./Alert";

function UserInput() {
  const [inputValue, setInputValue] = useState("");
  const [inputVisible, setInputVisibility] = useState(true);
  let userInput: string = "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    userInput = inputValue;
    setInputVisibility(false);
  };

  return (
    <>
      {inputVisible && (
        <div className="bg-dark text-white text-center">
          <input
            className="rounded-1 border"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter text here"
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
      {!inputVisible && (
        <Alert alertType="secondary" closeable={false}>
          {inputValue}
        </Alert>
      )}
    </>
  );
}

export default UserInput;
