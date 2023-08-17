/*
Comunicación con la API
 */
import axios from "axios";
import { API, API_LOCAL } from "./const";
import { getSession } from "next-auth/react";

const api = axios.create({});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session && session.accessToken)
    config.headers.Authorization = `${session.accessToken}`;

  return config;
});

export const HTTP = (
  method = "POST",
  url = "",
  data = {},
  accessToken = false
) => {
  return new Promise((resolve, reject) => {
    api({
      method: method,
      url: `${process.browser ? API : API_LOCAL}${url}`,
      [method === "POST" ? "data" : "params"]: {
        ...data,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(({ data }) => {
        return resolve(data);
      })
      .catch((err) => {
        if (process.browser && err.response?.data?.status === 403)
          return (window.location.href = "/account/login");
        return reject(
          err?.response?.data || {
            error: true,
            message:
              "No tenemos comunicación con el servidor por favor intenta más tarde.",
            status: 401,
          }
        );
      });
  });
};
