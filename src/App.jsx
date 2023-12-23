import "./App.css";
import Form from "./components/Form/Form";
import Countdown from "./components/Countdown/Countdown";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(null);

  function handleProps(value) {
    setValue(value);
  }

  return (
    <>
      <Form onProps={handleProps} />
      <Countdown value={value} />
    </>
  );
}

export default App;
