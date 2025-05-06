import { use } from "react";

export default function Users({ fetchData }) {
  const fetchDatas = use(fetchData);
  return (
    <>
      <h1>Users: {fetchDatas.length}</h1>
    </>
  );
}
