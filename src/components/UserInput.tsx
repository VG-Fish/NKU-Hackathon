import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Alert from "./Alert";

interface UserInputProps {
  inputVisible: boolean;
  setInputVisibility: Dispatch<SetStateAction<boolean>>;
}

function UserInput({ inputVisible, setInputVisibility }: UserInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
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
            placeholder="Enter your suggestion here"
            style={{ width: "85%", marginRight: "20px" }}
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
          <strong>User: </strong>
          {inputValue}
        </Alert>
      )}
    </>
  );
}

export default UserInput;
