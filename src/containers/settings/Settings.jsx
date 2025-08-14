import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DIFFICULTY } from '../../constants';
import { hideSettings, setDifficulty, restartGame } from '../../store/modules/control';
import { Settings } from '../../components';

const SettingsContainer = () => {
	const dispatch = useDispatch();
	const enableSettings = useSelector(rootState => rootState.control.enableSettings);
	const currentDifficulty = useSelector(rootState => rootState.control.difficulty);

	const [selectedDifficulty, setSelectedDifficulty] = useState(currentDifficulty || DIFFICULTY.EASY);

	const onSelectDifficulty = useCallback((difficulty) => {
		setSelectedDifficulty(difficulty);
	}, []);

	const onClickSet = useCallback(() => {
		dispatch(setDifficulty(selectedDifficulty));
		dispatch(restartGame());
		dispatch(hideSettings());
	}, [selectedDifficulty]);

	return (
		<>
			{enableSettings &&
			<Settings
				selectedDifficulty={selectedDifficulty}
				onSelectDifficulty={onSelectDifficulty}
				onClickSet={onClickSet}
			/>}
		</>
	);
};

export default SettingsContainer;