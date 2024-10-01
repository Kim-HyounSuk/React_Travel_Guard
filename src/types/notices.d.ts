export default interface INotices {
	currentCount: number;
	pageNo: number;
	numOfRows: number;
	totalCount: number;
	resultCode: number;
	resultMsg: string;
	data: INotice[];
}

export interface INotice {
	/** 대륙 코드 */
	continent_cd: string;
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
	ctgy_nm: string;
	file_download_url: string;
	file_path: string | null;
	other_country_cnt: number;
	other_country_iso_alp2: string | null;
	sfty_notice_id: string;
	sfty_notice_lv: number;
	sfty_notice_origin_id: number;
	title: string;
	txt_origin_cn: string;
	/** 한글 국가명 */
	wrt_dt: string;
}
