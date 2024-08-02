// styledComponents.js
import styled from 'styled-components';

// 기본 버튼 스타일
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Buttonmore = styled.button`
  background-color: #FE663F;
  border: none;
  border-radius: 20px;
  color: white;
  width: 115px;
  height: 37px;
  margin-top: 3rem;
  font-family: "Pretendard";
  font-weight:400;
  `