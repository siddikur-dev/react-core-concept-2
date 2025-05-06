import { use } from "react";
import ToDo from "./ToDo";
export default function ToDos({ Promise }) {
  const fetchPromise = use(Promise);
  return (
    <div>
      <h2>Today ToDO: {fetchPromise.length}</h2>
      {fetchPromise.map((todo) => (
        <ToDo key={todo.id} todo={todo}></ToDo>
      ))}
    </div>
  );
}
