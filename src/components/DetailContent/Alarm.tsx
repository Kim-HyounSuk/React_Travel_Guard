import ICombinedData from '@/types/combinedData';
import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@/components/common';
import { TravelAlarm } from '@/constants';

interface IProps {
	data: ICombinedData;
}

const Alarm: React.FC<IProps> = React.memo(({ data }) => {
	return (
		<Container>
			<AlarmWrapper>
				{TravelAlarm.map((value, idx) => (
					<Item
						key={idx}
						bgColor={data.alarm_lvl === idx ? value.color : 'inherit'}
						textColor={
							data.alarm_lvl !== idx || data.alarm_lvl === 4
								? 'inherit'
								: '#636363'
						}
						isActive={data.alarm_lvl === idx}
					>
						{value.text}
					</Item>
				))}
			</AlarmWrapper>
			<TextWrapper>{data.remark}</TextWrapper>
		</Container>
	);
});

export default Alarm;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const AlarmWrapper = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextWrapper = styled(Box)`
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Item = styled.div<{
	bgColor: string;
	textColor: string;
	isActive: boolean;
}>`
	flex: 1;
	background-color: ${({ bgColor }) => bgColor};
	text-align: center;
	padding: 0.5rem;
	color: ${({ textColor }) => textColor};

	@media (max-width: ${({ theme }) => theme.layout.maxWidth.mobile}) {
		display: ${({ isActive }) => (isActive ? 'block' : 'none')};
	}
`;
