import { useState } from "react";
import Button from "../Button/Button";

const Form = ({ onProps }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    onProps(inputValue);
    console.log(new Date(inputValue).getTime());
  };

  return (
    <div>
      <input
        type="datetime-local"
        placeholder="DD.MM.YYYY"
        className="input input-bordered input-secondary w-full max-w-xs mb-5"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleClick} />
    </div>
  );
};

export default Form;
