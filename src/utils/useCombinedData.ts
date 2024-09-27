import { useTravelAlerts, usePermissions } from '@/api';
import { travelAlertInfo } from '@/constants';
import ICombinedData from '@/types/combinedData';
import { useMemo } from 'react';

/** 위험 경보 API + 국가별 여권정보 API */
const useCombinedData = () => {
	const {
		data: travelAlertData,
		isLoading: travelAlertLoading,
		isError: travelAlertError,
		error: travelAlertErrorMessage,
	} = useTravelAlerts();
	const {
		data: permissionData,
		isLoading: permissionLoading,
		isError: permissionError,
		error: permissionErrorMessage,
	} = usePermissions();

	const combinedData: ICombinedData[] | null = useMemo(() => {
		if (!travelAlertData || !permissionData) return null;

		const travelAlerts = travelAlertData.data;
		const permissions = permissionData.data;

		const data = travelAlerts.map((travelAlert) => {
			const permission = permissions.find(
				(country) => country['국가'] === travelAlert.country_nm,
			);

			if (!permission) {
				return { ...travelAlert };
			}

			return {
				...travelAlert,
				color: travelAlertInfo[travelAlert.alarm_lvl || 0],
				entry: {
					entry_period: permission['일반여권소지자-입국가능기간'],
					entry_status: permission['일반여권소지자-입국가능여부'],
					entry_possession: permission['입국시 소지여부'],
					entry_ground: permission['무비자입국근거'],
				},
			};
		});

		return data;
	}, [travelAlertData, permissionData]);

	const isError = travelAlertError || permissionError;
	const errorMessage =
		travelAlertErrorMessage?.message || permissionErrorMessage?.message;

	return {
		data: combinedData,
		isLoading: travelAlertLoading || permissionLoading,
		isError,
		errorMessage,
	};
};

export default useCombinedData;
