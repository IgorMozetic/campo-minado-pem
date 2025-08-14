import styled from "styled-components";

export const GameOverWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const GameOverModal = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
`;

export const GameOverTitle = styled.h2`
  font-size: 32px;
  margin: 0 0 20px 0;
  color: #333;
  font-weight: bold;
`;

export const GameOverMessage = styled.p`
  font-size: 18px;
  margin: 0 0 30px 0;
  color: #666;
  line-height: 1.4;
`;

export const RestartButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3d8b40;
  }
`;