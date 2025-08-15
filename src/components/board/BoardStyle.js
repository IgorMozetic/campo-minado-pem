import styled from "styled-components";
import { CELL_MARGIN } from "../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.widthSize || 9}, 1fr);
  gap: ${CELL_MARGIN}px;
  justify-content: center;
  margin: 30px auto 0 auto;
  width: 90vw;
  height: 70vh;
  max-width: 90vh;
  background: linear-gradient(145deg, #2c3e50 0%, #34495e 100%);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;
