import axios, { AxiosHeaders } from "axios";
import { getAccessToken, isTokenExpired } from "@/lib/auth";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || ""; // relativo para cliente

export const http = axios.create({
  baseURL,
  withCredentials: false,
});

http.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && !isTokenExpired(token)) {
    if (config.headers instanceof AxiosHeaders) {
      config.headers.set("Authorization", `Bearer ${token}`);
    } else {
      const headers = new AxiosHeaders(config.headers);
      headers.set("Authorization", `Bearer ${token}`);
      config.headers = headers;
    }
  }
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      // Aquí se podría disparar un logout/redirect
      // console.warn("Unauthorized - 401");
    }
    return Promise.reject(error);
  }
);