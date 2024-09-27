import { ITravelAlert } from './travelAlerts';

export default interface ICombinedData extends ITravelAlert {
	alarm_lvl: number;
	region_ty: string;
	remark: string;
	/** 위험경보 컬러 */
	color: string;
	/** 입국 정보 */
	entry?: {
		/** 입국 가능 기간 */
		entry_period: string;
		/** 입국 가능 여부 */
		entry_status: string;
		/** 입국시 여권 소지 여부 */
		entry_possession: string;
		/** 무비자 입국 근거 */
		entry_ground: string;
	};
}
