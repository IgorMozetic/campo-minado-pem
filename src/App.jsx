import React from "react";
import {
  SettingsContainer,
  StatusContainer,
  BoardContainer,
  GameOverContainer,
  HintContainer,
} from "./containers";
import { Wrapper, Title } from "./AppStyle";
import MatrixRain from "./MatrixRain";

const App = () => {
  return (
    <Wrapper>
      <MatrixRain />
      <Title>Campo Minado das Equações</Title>
      <SettingsContainer />
      <StatusContainer />
      <BoardContainer />
      <GameOverContainer />
      <HintContainer />
    </Wrapper>
  );
};

export default App;
