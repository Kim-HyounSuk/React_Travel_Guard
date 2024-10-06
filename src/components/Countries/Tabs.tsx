import styled from '@emotion/styled';
import { Box, BadgeText } from '@/components/common';
import React from 'react';
import { ITab } from '@/hooks/useTabs';
import { travelAlertInfo } from '@/constants';

interface IProps {
	tabs: ITab[];
	activeTab: ITab;
	length: number;
	onSelectTab: (tab: ITab) => void;
}

const Tabs: React.FC<IProps> = React.memo(
	({ tabs, activeTab, onSelectTab, length }) => {
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
								{`${tab.label}${activeTab === tab ? `(${length})` : ''}`}
							</BadgeText>
						</Tab>
					) : (
						<Tab
							key={'전체'}
							onClick={() => onSelectTab(tab)}
							isActive={activeTab === tab}
						>
							전체{activeTab === tab ? `(${length})` : ''}
						</Tab>
					),
				)}
			</Container>
		);
	},
);

export default Tabs;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeMobile}) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Tab = styled(Box)<{ isActive: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSizes.small};
	cursor: pointer;
	opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};

	&:hover {
		opacity: 1;
	}
`;
