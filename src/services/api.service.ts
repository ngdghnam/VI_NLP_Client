import axios from "axios";

export const API_PATH = {
  // DEFINES HERE
};

export const axiosClient = axios.create({
  baseURL: "localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const post = (url: string, data: any) => {
  return axiosClient.post(url, data);
};

export const put = (url: string, data: string) => {
  return axiosClient.put(url, data);
};

export const get = (url: string) => {
  return axiosClient.get(url);
};
