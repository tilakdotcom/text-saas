
import axios, { AxiosInstance } from "axios";
import { BACKEND_URI } from "../constants/getEvn";

const options = {
  withCredentials: true,
  baseURL: BACKEND_URI,
};

const API: AxiosInstance = axios.create(options);

export default API;