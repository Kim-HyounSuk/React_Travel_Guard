import { useQuery } from '@tanstack/react-query';
import { http } from './base';
import IEmbassies from '@/types/embassies';

const fetchEmbassies = async (): Promise<IEmbassies> =>
	await http.get(
		import.meta.env.VITE_API_BASE_URL,
		'1262000/EmbassyService2/getEmbassyList2',
		{
			numOfRows: 500,
		},
	);

const useEmbassies = () => {
	return useQuery({
		queryKey: ['embassy'],
		queryFn: fetchEmbassies,
		staleTime: 1800000,
		gcTime: 3600000,
		retry: 3,
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
	});
};

export default useEmbassies;
