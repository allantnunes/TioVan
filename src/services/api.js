import axios from "axios";
import { getId } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(async config => {
  const _id = getId();
  if (_id) {
    config.headers.Authorization = `Bearer ${_id}`;
  }
  return config;
});

export default api;