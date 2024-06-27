import { useState } from "react";

const Tests = () => {
  const [value, setValue] = useState(true);
  const [data, setData] = useState("");
  let newValue = false;
  function handleClick(event) {
    setValue(newValue);
    newValue = true;
  }
  return (
    <>
      {value ? <input type="text" /> : <h3>{data} paragraph</h3>}
      <button onClick={(event) => handleClick(event)}>Click Me</button>
    </>
  );
};

export default Tests;
