import { FC, useEffect } from "react";
import { Items } from "../components/items/items";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import { itemActions } from "../redux/slices/items.slice";
import { queryHelper } from "../helpers/query.helper";
import { Filter, Wrapper } from "./styled.components";
import { Price } from "../components/price/price.component";
import { useDebounce } from "../hooks/debounce";
import { Stars } from "../components/stars-search/starts";

export const ItemsPage: FC = () => {
  const { items, cart } = useAppSelector((state) => state.itemsReducer);
  const { search, order, minPrice, maxPrice, rate } = useAppSelector((state) => state.searchReducer);
  const debounceSearch = useDebounce(search, 1000);
  const debounceMin = useDebounce(minPrice, 200);
  const debounceMax = useDebounce(maxPrice, 200);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const query = queryHelper(debounceSearch, order, debounceMin, debounceMax, rate);
    dispatch(itemActions.getItems(query));
  }, [debounceSearch, order, debounceMin, debounceMax, rate, dispatch]);

  return (
    <Wrapper>
      <Filter>
        <Price />
        <Stars />
      </Filter>
      <Items items={items} cart={cart} isSort={true} />
    </Wrapper>
  );
};
