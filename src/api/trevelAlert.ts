import { ITravelAlerts } from '@/types/travelAlerts';
import { useQuery } from '@tanstack/react-query';
import { http } from './base';

const fetchTravelAlert = async (): Promise<ITravelAlerts> =>
	await http.get('1262000/TravelAlarmService2/getTravelAlarmList2', {
		numOfRows: 500,
	});

const useTravelAlert = () => {
	return useQuery({
		queryKey: ['travelAlert'],
		queryFn: fetchTravelAlert,
		staleTime: 1800000,
		gcTime: 3600000,
	});
};

export default useTravelAlert;
