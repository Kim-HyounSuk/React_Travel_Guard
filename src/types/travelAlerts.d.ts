import { IAxiosResponse } from './axiosResponse';

export interface ITravelAlerts extends IAxiosResponse {
	/** 현재 결과 수 */
	currentCount: number;
	data: ITravelAlert[];
	/** 한 페이지 결과 수 */
	numOfRows: number;
	/** 페이지 번호 */
	pageNo: number;
	/** 결과 코드 */
	resultCode: number;
	/** 결과 메시지 */
	resultMsg: string;
	/** 전체 결과 수 */
	totalCount: number;
}

interface ITravelAlert {
	/** 경보 단계 */
	alarm_lvl: number;
	/** 대륙 코드 */
	continent_cd: number;
	/** 영문 대륙명 */
	continent_eng_nm: string;
	/** 한글 대륙명 */
	continent_nm: string;
	/** 영문 국가명 */
	country_eng_nm: string;
	/** ISO 2자리 코드 */
	country_iso_alp2: string;
	/** 한글 국가명 */
	country_nm: string;
	/** 위험지도 경로 */
	dang_map_download_url: string;
	/** 국기 경로 */
	flag_download_url: string;
	/** 지역 유형 */
	region_ty: string;
	/** 작성일 */
	written_dt: string;
	/** 경보 내용 */
	remark: string;
}
