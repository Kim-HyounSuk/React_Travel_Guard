import { useTabs } from '@/hooks';
import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React from 'react';
import Tabs from './Tabs';
import ContentBox from './ContentBox';

interface IProps {
	data: ICombinedData[];
}

const Countries: React.FC<IProps> = React.memo(({ data }) => {
	const { activeTab, tabs, filteredData, onSelectTab } = useTabs(data);

	return (
		<Container>
			<Tabs
				tabs={tabs}
				activeTab={activeTab}
				onSelectTab={onSelectTab}
				length={filteredData.length}
			/>
			<ContentBox data={filteredData} />
		</Container>
	);
});

export default Countries;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	min-height: 0;
	gap: 1rem;
	padding: 3rem 0;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeTablet}) {
		padding: 2.5rem 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		padding: 2rem 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.largeMobile}) {
		padding: 1.5rem 0;
	}

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		padding: 1rem 0;
	}
`;
