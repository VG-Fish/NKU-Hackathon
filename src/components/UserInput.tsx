import { useState } from "react";

function UserInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("User Input:", inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserInput;
