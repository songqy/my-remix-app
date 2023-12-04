import axios from "axios";

const fetch = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1",
});

export const fetchInfo = async () => {
  const { data } = await fetch.get("/info");
  return data;
};

export const updateInfo = async () => {
  const { data } = await fetch.post("/update");
  return data;
};
