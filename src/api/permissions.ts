import { useQuery } from '@tanstack/react-query';
import { http } from './base';
import IPermissions from '@/types/permissions';

const fetchPermissions = async (): Promise<IPermissions> =>
	await http.get(
		import.meta.env.VITE_API_PERMISSION_URL,
		'15076574/v1/uddi:b0a4deac-3443-4e7b-bee1-a6163b1dbc17',
		{
			perPage: 500,
		},
	);

const usePermissions = () => {
	return useQuery({
		queryKey: ['permission'],
		queryFn: fetchPermissions,
		staleTime: 1800000,
		gcTime: 3600000,
	});
};

export default usePermissions;
