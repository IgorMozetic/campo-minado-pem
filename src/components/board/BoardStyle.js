import styled from "styled-components";
import { CELL_MARGIN } from "../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.widthSize || 9}, 1fr);
  gap: ${CELL_MARGIN}px;
  justify-content: center;
  margin: 10px auto 0 auto;
  width: 90vw;
  height: 70vh;
  max-width: 90vh;
`;
