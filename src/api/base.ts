import axios from 'axios';
import qs from 'qs';

const client = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
	timeout: 5000,
	params: {
		serviceKey: import.meta.env.VITE_API_SERVICE_KEY,
		returnType: 'JSON',
	},
});

export const http = {
	get: function get<T>(url: string, params?: any): Promise<T> {
		return client.get(url, { params }).then((res) => res.data);
	},
};
