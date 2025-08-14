import styled from "styled-components";

export const HintWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const HintModal = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  width: 90%;
  border: 3px solid #4CAF50;
`;

export const HintTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 20px 0;
  color: #2E7D32;
  font-weight: bold;
`;

export const HintContent = styled.div`
  margin-bottom: 25px;
`;

export const HintText = styled.p`
  font-size: 16px;
  margin: 15px 0;
  color: #333;
  line-height: 1.5;
`;

export const HintEquation = styled.div`
  background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
  border: 2px solid #4CAF50;
  border-radius: 12px;
  padding: 15px;
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;
  color: #2E7D32;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
`;

export const CloseButton = styled.button`
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  border: none;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);

  &:hover {
    background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.3);
  }
`;