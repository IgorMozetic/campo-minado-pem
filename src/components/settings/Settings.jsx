import React from 'react';
import { DIFFICULTY_CONFIGS } from '../../constants';
import { Button } from '../common';
import {
	Wrapper,
	DifficultyWrapper,
	DifficultyTitle,
	DifficultyButton,
	DifficultyInfo
} from './SettingsStyle';

const Settings = ({
	selectedDifficulty,
	onSelectDifficulty,
	onClickSet
}) => {
	return (
		<Wrapper>
			<DifficultyWrapper>
				<DifficultyTitle>Selecione a Dificuldade:</DifficultyTitle>
				{Object.entries(DIFFICULTY_CONFIGS).map(([key, config]) => (
					<DifficultyButton
						key={key}
						isSelected={selectedDifficulty === key}
						onClick={() => onSelectDifficulty(key)}
					>
						<strong>{config.label}</strong>
						<DifficultyInfo isSelected={selectedDifficulty === key}>
							{config.width}x{config.height} - {config.mines} bombas
						</DifficultyInfo>
					</DifficultyButton>
				))}
			</DifficultyWrapper>
			<Button onClick={onClickSet}>Aplicar</Button>
		</Wrapper>
	);
};

export default Settings;