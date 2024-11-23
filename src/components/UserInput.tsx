import { useState } from "react";

function UserInput() {
  const [inputValue, setInputValue] = useState("");
  const [inputVisible, setInputVisibility] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setInputVisibility(false);
  };

  return (
    <div>
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
    </div>
  );
}

export default UserInput;
