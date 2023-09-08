import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #9dc2ff;
  border-radius: 5px;
  padding: 10px 15px;
  color: #2264d1;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  elign-items: center;
  gap: 10px;
  position: relative;

  &:hover {
    border: 2px solid #2264d1;
    cursor: pointer;
  }
`;
