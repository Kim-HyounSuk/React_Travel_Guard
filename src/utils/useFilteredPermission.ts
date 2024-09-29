import ICombinedData from '@/types/combinedData';
import { useMemo } from 'react';

const useFilteredPermission = (data: ICombinedData[] | null) => {
	return useMemo(() => {
		if (!data) return null;

		return data.filter((country) => country.entry);
	}, [data]);
};

export default useFilteredPermission;
