export default interface IPermissions {
	/** 현재 결과 수 */
	currentCount: number;
	data: IPermission[];
	/** 매칭된 결과 수 */
	matchCount: number;
	/** 페이지 번호 */
	page: number;
	/** 한 페이지 결과 수 */
	perPage: number;
	/** 전체 결과 수 */
	totalCount: number;
}

export interface IPermission {
	'관용여권소지자-입국가능기간': string;
	'관용여권소지자-입국가능여부': string;
	국가: string;
	무비자입국근거: string;
	비고: string;
	'외교관여권소지자-입국가능기간': string;
	'외교관여권소지자-입국가능여부': string;
	'일반여권소지자-입국가능기간': string;
	'일반여권소지자-입국가능여부': string;
	'입국시 소지여부': string;
}
