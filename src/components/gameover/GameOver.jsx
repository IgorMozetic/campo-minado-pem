import React from "react";
import { connect } from "react-redux";
import { restartGame } from "../../store/modules/control";
import { GAME } from "../../constants";
import { 
  GameOverWrapper, 
  GameOverModal, 
  GameOverTitle, 
  GameOverMessage, 
  RestartButton 
} from "./GameOverStyle";

const GameOver = ({ gameState, restartGame }) => {
  if (gameState === GAME.WIN || gameState === GAME.LOSE) {
    return (
      <GameOverWrapper>
        <GameOverModal>
          <GameOverTitle>
            {gameState === GAME.WIN ? "🎉 Parabéns!" : "💥 Game Over"}
          </GameOverTitle>
          <GameOverMessage>
            {gameState === GAME.WIN 
              ? "Você venceu o jogo! Muito bem!" 
              : "Você perdeu! Tente novamente."}
          </GameOverMessage>
          <RestartButton onClick={restartGame}>
            Tentar Novamente
          </RestartButton>
        </GameOverModal>
      </GameOverWrapper>
    );
  }
  
  return null;
};

const mapStateToProps = (state) => ({
  gameState: state.control.gameState,
});

const mapDispatchToProps = {
  restartGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);