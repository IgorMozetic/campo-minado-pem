import styled from "styled-components";
import { CODES } from "../../constants";

export const Button = styled.button`
  background-color: ${({ cellCode }) => {
    switch (cellCode) {
      case CODES.NOTHING:
      case CODES.MINE:
        return "lightskyblue";
      case CODES.FLAG:
      case CODES.MINE_FLAG:
        return "#F1C40F";
      case CODES.QUESTION:
      case CODES.MINE_QUESTION:
        return "#44D580";
      default:
        return "white";
    }
  }};
  border: 2px solid ${({ cellCode }) => {
    switch (cellCode) {
      case CODES.NOTHING:
      case CODES.MINE:
        return "#87CEEB";
      case CODES.FLAG:
      case CODES.MINE_FLAG:
        return "#F39C12";
      case CODES.QUESTION:
      case CODES.MINE_QUESTION:
        return "#2ECC71";
      default:
        return "#ddd";
    }
  }};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${({ cellCode }) => {
    switch (cellCode) {
      case 1:
        return "#0984E3";
      case 2:
        return "#0984E3";
      case 3:
        return "#0984E3";
      case 4:
        return "#0984E3";
      case 5:
        return "#0984E3";
      case 6:
        return "#0984E3";
      case 7:
        return "#0984E3";
      case 8:
        return "#0984E3";
      default:
        return "black";
    }
  }};
  display: block;
  font-size: ${({ cellCode }) => (cellCode > 0 ? "0.9vw" : "1.5vw")};
  font-weight: bold;
  outline: none;
  width: 100%;
  height: 100%;
  min-width: 40px;
  min-height: 40px;
  max-font-size: ${({ cellCode }) => (cellCode > 0 ? "12px" : "16px")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(0);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    filter: brightness(0.95);
    animation: pulse 0.3s ease-in-out;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }

  &:focus {
    outline: 2px solid #4CAF50;
    outline-offset: 2px;
  }
`;
