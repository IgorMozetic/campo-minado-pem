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
  border: none;
  border-radius: 5px;
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
  font-size: ${({ cellCode }) => (cellCode > 0 ? "2vw" : "3vw")};
  font-weight: bold;
  outline: none;
  width: 100%;
  height: 100%;
  min-width: 40px;
  min-height: 40px;
`;
