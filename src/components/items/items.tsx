import { FC } from "react";
import { ItemI } from "../../interfaces/item.interface";
import { Container, ItemsWrapper } from "./styled.components";
import { Item } from "../item/item";
import { Sort } from "../sort/sort.component";

interface IProps {
  items: ItemI[];
  cart: ItemI[];
  isSort?: boolean;
}

const Items: FC<IProps> = ({ items, cart, isSort }) => {
  return (
    <Container>
      {isSort && <Sort />}
      <ItemsWrapper>
        {items &&
          items.map((item: ItemI) => {
            const index = cart.findIndex((elem) => elem._id === item._id);
            if (index !== -1) {
              return <Item key={item._id} item={item} isCart={true} />;
            }
            return <Item key={item._id} item={item} isCart={false} />;
          })}
      </ItemsWrapper>
    </Container>
  );
};

export { Items };
