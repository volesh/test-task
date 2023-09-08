import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { searchActions } from "../../redux/slices/search.slice";
import { Rating } from "@mui/material";
import { StarsContainer, StarBlock } from "./styled.components";

const Stars: FC = () => {
  const dsipatch = useAppDispatch();

  const handleClick = (value: number) => {
    dsipatch(searchActions.setRate(value));
  };
  return (
    <StarsContainer>
      <StarBlock onClick={() => handleClick(1)}>
        <Rating name="read-only" value={1} readOnly /> & more
      </StarBlock>
      <StarBlock onClick={() => handleClick(2)}>
        <Rating name="read-only" value={2} readOnly /> & more
      </StarBlock>
      <StarBlock onClick={() => handleClick(3)}>
        <Rating name="read-only" value={3} readOnly /> & more
      </StarBlock>
      <StarBlock onClick={() => handleClick(4)}>
        <Rating name="read-only" value={4} readOnly /> & more
      </StarBlock>
    </StarsContainer>
  );
};

export { Stars };
