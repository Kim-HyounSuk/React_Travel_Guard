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
	get: async function get<T>(url: string, params?: any): Promise<T> {
		try {
			const res = await client.get(url, { params });
			return res.data;
		} catch (e) {
			console.error('API 호출 중 에러 발생', e);
			throw e;
		}
	},
};
