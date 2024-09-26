import ITravelAlerts from '@/types/travelAlerts';
import { useQuery } from '@tanstack/react-query';
import { http } from './base';

const fetchTravelAlerts = async (): Promise<ITravelAlerts> =>
	await http.get(
		import.meta.env.VITE_API_BASE_URL,
		'1262000/TravelAlarmService2/getTravelAlarmList2',
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
	});
};

export default useTravelAlerts;
