import "./App.css";
import { useState } from "react";

export default function Batsman() {
  const [count, setCount] = useState(0);
  const [six, setSix] = useState(0);
  const [four, setFour] = useState(0);
  const handle1 = () => {
    const newRun = count + 1;
    setCount(newRun);
  };
  const handle4 = () => {
    const newRun = count + 4;
    const fourCount = four + 1;
    setFour(fourCount);
    setCount(newRun);
  };
  const handle6 = () => {
    const newRun = count + 6;
    const sixCount = six + 1;
    setSix(sixCount);
    setCount(newRun);
  };
  return (
    <div className="div">
      <h2>Bangu Batsman</h2>
      <h3>Six Count: {six}</h3>
      <h3>Four Count: {four}</h3>
      <h1>{count}</h1>

      {count > 49 && <h3>you have update half sentury </h3>}
      <button onClick={handle1}>Add1</button>
      <button onClick={handle4}>Add4</button>
      <button onClick={handle6}>Add6</button>
    </div>
  );
}
