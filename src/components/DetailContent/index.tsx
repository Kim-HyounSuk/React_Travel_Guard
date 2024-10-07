import ICombinedData from '@/types/combinedData';
import { IEmbassy } from '@/types/embassies';
import { INotice } from '@/types/notices';
import styled from '@emotion/styled';
import React from 'react';
import ContentTitle from './ContentTitle';
import MapContent from './MapContent';
import NoticesContent from './NoticesContent';
import PermissionContent from './PermissionContent';
import EmbassiesContent from './EmbassiesContent';
import Alarm from './Alarm';

interface IProps {
	country: ICombinedData;
	embassies: IEmbassy[];
	notices: INotice[];
}

const DetailContent: React.FC<IProps> = React.memo(
	({ country, embassies, notices }) => {
		return (
			<Container>
				<ContentTitle country={country} />
				<Alarm data={country} />
				<ContentWrap>
					<MapContent country={country} />
					<NoticesContent notices={notices} />
					<PermissionContent country={country} />
				</ContentWrap>
				<EmbassiesContent embassies={embassies} />
			</Container>
		);
	},
);

export default DetailContent;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-height: 0;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: ${({ theme }) => theme.colors.primary};
	}
`;

const ContentWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(15, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 2rem;

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.tablet}) {
		display: flex;
		flex-direction: column;
	}
`;
