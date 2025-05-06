// import { useState } from "react";
import { Suspense, useState } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import ToDos from "./ToDos";
import Players from "./Players";

// const fetchData = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchs = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const asyncFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};
function App() {
  const [count, setCount] = useState(0);
  const handleAdd1 = () => {
    const number = count + 1;
    setCount(number);
  };
  const handleReset = () => {
    setCount(0);
  };
  // const handleAlert1 = () => {
  //   alert("I am aler 1");
  // };

  // const handleAdd5 = (number) => {
  //   const newNumber = number + 5;
  //   alert(newNumber);
  // };

  const fetchPromise = fetchs();
  const Promise = asyncFetch();

  return (
    <>
      <p>{count}</p>
      <button onClick={handleAdd1}>add</button>
      <button onClick={handleReset}>Reset</button>

      <Players></Players>
      <Suspense fallback={<h3>Loading...</h3>}>
        <ToDos Promise={Promise}></ToDos>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friends fetchPromise={fetchPromise}></Friends>
      </Suspense>
    </>
  );
}

export default App;
