import { styled } from "styled-components";

export const StarsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px 0px;
  gap: 10px;
`;

export const StarBlock = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 3px grey;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
