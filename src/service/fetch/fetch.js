import axios from "axios";

export default async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await axios.get(`${url}`);
  return res.data;
};
