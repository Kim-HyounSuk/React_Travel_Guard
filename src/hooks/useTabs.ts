import ICombinedData from '@/types/combinedData';
import { useState } from 'react';

interface ITab {
	label: string;
	value: number | null;
}

const tabs: ITab[] = [
	{ label: '전체', value: null },
	{ label: '0단계 경보없음', value: 0 },
	{ label: '1단계 여행유의', value: 1 },
	{ label: '2단계 여행자제', value: 2 },
	{ label: '3단계 출국권고', value: 3 },
	{ label: '4단계 여행금지', value: 4 },
	{ label: '5단계 특별여행주의보', value: 5 },
];

const useTabs = (data: ICombinedData[]) => {
	const [activeTab, setAtiveTab] = useState<ITab>(tabs[0]);

	const filterdData =
		activeTab.value === null
			? data
			: data.filter((country) => country.alarm_lvl === activeTab.value);

	const onSelectTab = (tab: ITab) => {
		setAtiveTab(tab);
	};

	return {
		activeTab,
		tabs,
		filterdData,
		onSelectTab,
	};
};

export default useTabs;
