import ITravelAlerts from '@/types/travelAlerts';
import { useQuery } from '@tanstack/react-query';
import { http } from './base';

const fetchTravelAlerts = async (): Promise<ITravelAlerts> =>
	await http.get(
		import.meta.env.VITE_API_BASE_URL,
		'1262000/TravelAlarmService0404/getTravelAlarm0404List',
		{
			numOfRows: 500,
		},
	);

const useTravelAlerts = () => {
	return useQuery({
		queryKey: ['travelAlert'],
		queryFn: fetchTravelAlerts,
		staleTime: 1800000,
		gcTime: 3600000,
		retry: 3,
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
	});
};

export default useTravelAlerts;
