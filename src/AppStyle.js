import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  display: inline-block;
  padding: 30px;
  margin: 30px;
  width: 80%;
  height: 90%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: center;
  height: 5%;
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  margin-bottom: 20px;
`;
