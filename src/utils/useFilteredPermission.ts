import ICombinedData from '@/types/combinedData';
import { useMemo } from 'react';

/** combinedData 중 entry 프로퍼티가 있는 정보만 필터링 하는 함수 */
const useFilteredPermission = (data: ICombinedData[] | null) => {
	return useMemo(() => {
		if (!data) return null;

		return data.filter((country) => country.entry);
	}, [data]);
};

export default useFilteredPermission;
