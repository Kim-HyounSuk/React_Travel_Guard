import styled from '@emotion/styled';
import { Box, BadgeText } from '@/components/common';
import React from 'react';
import { ITab } from '@/hooks/useTabs';
import { travelAlertInfo } from '@/constants';

interface IProps {
	tabs: ITab[];
	activeTab: ITab;
	onSelectTab: (tab: ITab) => void;
}

const Tabs: React.FC<IProps> = ({ tabs, activeTab, onSelectTab }) => {
	return (
		<Container>
			{tabs.map((tab, idx) =>
				tab.value !== null ? (
					<Tab
						key={idx}
						onClick={() => onSelectTab(tab)}
						isActive={activeTab === tab}
					>
						<BadgeText isTab={true} color={travelAlertInfo[tab.value].color}>
							{tab.label}
						</BadgeText>
					</Tab>
				) : (
					<Tab onClick={() => onSelectTab(tab)} isActive={activeTab === tab}>
						전체
					</Tab>
				),
			)}
		</Container>
	);
};

export default Tabs;

const Container = styled.div`
	display: flex;
`;

const Tab = styled(Box)<{ isActive: boolean }>`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSizes.small};
	cursor: pointer;
	opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
`;
