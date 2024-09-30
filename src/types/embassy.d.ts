export default interface IEmbassies {
	/** 현재 결과 수 */
	currentCount: number;
	/** 한 페이지 결과 수 */
	numOfRows: number;
	/** 페이지 번호 */
	pageNo: number;
	/** 결과코드 */
	resultCode: number;
	/** 결과 메시지 */
	resultMsg: string;
	/** 전체 결과 수 */
	totalCount: number;
}

export interface IEmbassy {
	/** 영사관 번호 */
	center_tel_no: string | null;
	/** 영문 국가명 */
	country_eng_nm: string;
	/** ISO_2 */
	country_iso_alp2: string;
	/** 국가명 */
	country_nm: string;
	/** 재외공관 코드 */
	embassy_cd: string;
	/** 재외공관 한글명 */
	embassy_kor_nm: string;
	/** 재외공관 위도 */
	embassy_lat: number;
	/** 재외공관 경도 */
	embassy_lng: number;
	/** 재외공관 관리유형 코드 */
	embassy_manage_ty_cd: string;
	/** 재외공관 관리유형 코드명 */
	embassy_manage_ty_cd_nm: string;
	/** 재외공관 유형 코드 */
	embassy_ty_cd: string;
	/** 재외공관 유형 코드명 */
	embassy_ty_cd_nm: string;
	/** 재외공관 주소 */
	emblgbd_addr: string;
	/** 무료 전화번호 */
	free_tel_no: string | null;
	/** 대표 전화번호 */
	tel_no: string;
	/** 긴급 전화번호 */
	urgency_tel_no: string;
}
