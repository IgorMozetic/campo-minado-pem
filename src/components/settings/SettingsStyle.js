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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px;
	margin-bottom: 15px;
	border: 3px solid ${props => props.isSelected ? '#4CAF50' : '#e0e0e0'};
	background: ${props => props.isSelected 
		? 'linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 100%)' 
		: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'};
	border-radius: 12px;
	cursor: pointer;
	text-align: center;
	transition: all 0.3s ease;
	box-shadow: ${props => props.isSelected 
		? '0 4px 12px rgba(76, 175, 80, 0.3)' 
		: '0 2px 8px rgba(0, 0, 0, 0.1)'};
	transform: ${props => props.isSelected ? 'translateY(-2px)' : 'translateY(0)'};

	&:hover {
		border-color: #4CAF50;
		background: linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 100%);
		box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
		transform: translateY(-2px);
	}

	&:last-child {
		margin-bottom: 0;
	}

	strong {
		font-size: 18px;
		color: ${props => props.isSelected ? '#2E7D32' : '#333'};
		margin-bottom: 8px;
		font-weight: 600;
	}
`;

export const DifficultyInfo = styled.div`
	color: ${props => props.isSelected ? '#4CAF50' : '#666'};
	font-size: 14px;
	font-weight: 500;
	background-color: ${props => props.isSelected ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
	padding: 6px 12px;
	border-radius: 20px;
	border: 1px solid ${props => props.isSelected ? 'rgba(76, 175, 80, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
`;