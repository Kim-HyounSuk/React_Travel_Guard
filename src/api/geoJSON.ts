import { IGeoJson } from '@/types/globe';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchGeoJSON = async (): Promise<IGeoJson> => {
	const res = await axios.get('./datasets/contries.geojson');

	return res.data;
};

const useGeoJSON = () => {
	return useQuery({
		queryKey: ['GeoJSON'],
		queryFn: fetchGeoJSON,
		staleTime: Infinity,
		gcTime: Infinity,
		retry: 3,
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
	});
};

export default useGeoJSON;
