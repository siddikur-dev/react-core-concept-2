import { use } from "react";
import "./App.css";
import Friend from "./Friend";
export default function Friends({ fetchPromise }) {
  const fetchData = use(fetchPromise);
  return (
    <>
      <h2>Friends:{fetchData.length}</h2>
      <div className="card">
        {fetchData.map((friend, i) => (
          <Friend friend={friend} key={i}></Friend>
        ))}
      </div>
    </>
  );
}
