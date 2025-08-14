import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 30px;
	text-align: center;
`;

export const DifficultyWrapper = styled.div`
	margin-bottom: 30px;
`;

export const DifficultyTitle = styled.h3`
	margin-bottom: 20px;
	color: #333;
	font-size: 18px;
`;

export const DifficultyButton = styled.div`
	display: block;
	width: 100%;
	padding: 15px;
	margin-bottom: 15px;
	border: 2px solid ${props => props.isSelected ? '#4CAF50' : '#ddd'};
	background-color: ${props => props.isSelected ? '#f0f8f0' : '#fff'};
	border-radius: 8px;
	cursor: pointer;
	text-align: left;
	transition: all 0.3s ease;

	&:hover {
		border-color: #4CAF50;
		background-color: #f0f8f0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const DifficultyInfo = styled.div`
	color: #666;
	font-size: 14px;
	margin-top: 5px;
`;