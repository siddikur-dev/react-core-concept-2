import { useState } from "react";
import "./App.css";
export default function Friend({ friend }) {
  const { name, email } = friend;
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="card">
      <h2>Name:{name}</h2>
      <h3>Email:{email}</h3>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
      {show&&<p>SHow somw Data</p>}
    </div>
  );
}
