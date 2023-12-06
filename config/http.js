import axios from "axios";
import { API } from "./const";
// import { getSession } from 'next-auth/client';
import { handleError } from "./utils";

const api = axios.create({});

api.interceptors.request.use(async (config) => {
	const session = await getSession();

	if (session && session.accessToken)
		config.headers.Authorization = `${session.accessToken}`;

	return config;
});

export const HTTP = (
	method = 'POST',
	url = '',
	data = {},
	accessToken = false
) => {

	return new Promise((resolve, reject) => {
		api({
			method: method,
			url: `${API}${url}`,
			[method === 'POST' ? 'data' : 'params']: {
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
					return (window.location.href = '/account/login');
				return reject(
					err?.response?.data || {
						error: true,
						message:
							'No tenemos comunicación con el servidor por favor intenta más tarde.',
						status: 401,
					}
				);
			});
	});
};

export const HTTP_REQUEST = (method = "post", url = "", data = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: `${API}${url}`,
      [method === "post" ? "data" : "params"]: {
        ...data,
      },
    })
      .then(({ data }) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(
			err?.response?.data || {
				error: true,
				message:
					'No tenemos comunicación con el servidor por favor intenta más tarde.',
				status: 401,
			})
      });
  });
};