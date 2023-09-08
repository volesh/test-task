import { FC } from "react";
import { Items } from "../components/items/items";
import { useAppSelector } from "../hooks/redux.hooks";
import { Wrapper, Empty } from "./styled.components";

export const FavoritePage: FC = () => {
  const { cart } = useAppSelector((state) => state.itemsReducer);
  return (
    <Wrapper>{cart.length > 0 ? <Items items={cart} cart={cart} isSort={false} /> : <Empty>Favorite is Empty</Empty>}</Wrapper>
  );
};
