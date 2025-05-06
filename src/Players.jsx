import { useState } from "react";

export default function Players() {
  const [Player, setPlayer] = useState([]);
  useState(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setPlayer(data))
    );
  }, []);
  return (
    <>
      <h2>Player:{Player.length}</h2>
    </>
  );
}
