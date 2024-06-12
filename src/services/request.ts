import axios from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_BASE_API_URL });

export type Method = "GET" | "POST";
export default function request(
  method: Method,
  path = "",
  payload = {},
  params?: Record<string, string>
) {
  const options = {
    method,
    withCredentials: true,
    url: path,
    data: payload,
    json: true,
    params,
  };
  return client({
    ...options,
    headers: {
      "Content-Type": "multipart/form-data;",
    },
  });
}
