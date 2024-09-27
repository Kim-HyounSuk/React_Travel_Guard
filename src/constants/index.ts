export const travelAlertInfo: {
	[key: number]: {
		color: string;
		title: string;
		text: string[];
	};
} = {
	0: {
		color: 'rgba(0, 255, 0, 0.8)',
		title: '경보없음',
		text: ['안전 또는 출/입국 불가'],
	},
	1: {
		color: 'rgba(0, 255, 255, 0.8)',
		title: '여행유의',
		text: ['신변안전 위험 요인 숙지·대비'],
	},
	2: {
		color: 'rgba(0, 123, 255, 0.8)',
		title: '여행자제',
		text: ['(여행예정자) 불필요한 여행 자제', '(체류자) 신변안전 특별유의'],
	},
	3: {
		color: 'rgba(255, 255, 0, 0.8)',
		title: '출국권고',
		text: [
			'(여행예정자) 여행 취소·연기',
			'(체류자) 긴요한 용무가 아닌 한 출국',
		],
	},
	4: {
		color: 'rgba(255, 127, 0, 0.8)',
		title: '여행금지',
		text: ['(여행예정자) 여행금지 준수', '(체류자) 즉시 대피·철수'],
	},
	5: {
		color: 'rgba(255, 0, 0, 0.8)',
		title: '특별여행주의보',
		text: ['(여행예정자) 여행 취소·연기', '(체류자) 즉시 대피·철수'],
	},
};
