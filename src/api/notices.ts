import INotices from '@/types/notices';
import { http } from './base';
import { useQuery } from '@tanstack/react-query';

const fetchNotices = async (countryCode: string): Promise<INotices> =>
	await http.get(
		import.meta.env.VITE_API_BASE_URL,
		'1262000/CountrySafetyService6/getCountrySafetyList6',
		{
			numOfRows: 3,
			pageNo: 1,
			cond: {
				['country_iso_alp2::EQ']: countryCode,
			},
		},
	);

const useNotices = (countryCode: string) => {
	return useQuery({
		queryKey: ['notice', countryCode],
		queryFn: () => fetchNotices(countryCode),
		staleTime: 1800000,
		gcTime: 3600000,
	});
};

export default useNotices;
