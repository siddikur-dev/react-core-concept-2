export default function ToDo({ todo }) {
  const { title, completed } = todo;

  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>Complete: {completed ? "completed" : "Not completed"}</h3>
    </div>
  );
}
