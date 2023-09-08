import { styled } from "styled-components";

export const Card = styled.div`
  flex: 20%;
  max-width: 22%;
  padding: 10px 15px;
  border-radius: 5px;
  transition: transform 0.3s;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
