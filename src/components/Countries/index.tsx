import useTabs from '@/hooks/useTabs';
import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React from 'react';
import Tabs from './Tabs';
import ContentBox from './ContentBox';

interface IProps {
	data: ICombinedData[];
}

const Countries: React.FC<IProps> = ({ data }) => {
	const { activeTab, tabs, filteredData, onSelectTab } = useTabs(data);

	return (
		<Container>
			<Tabs tabs={tabs} activeTab={activeTab} onSelectTab={onSelectTab} />
			<ContentBox data={filteredData} />
		</Container>
	);
};

export default Countries;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	min-height: 0;
`;
