import { FC } from "react";
import Rating from "@mui/material/Rating";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ItemI } from "../../interfaces/item.interface";
import { Card } from "./styled.components";
import css from "./item.module.css";
import { WishButton } from "../wish-button/button.component";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { itemActions } from "../../redux/slices/items.slice";

interface IProps {
  item: ItemI;
  isCart: boolean;
}

const Item: FC<IProps> = ({ item, isCart }) => {
  const dispatch = useAppDispatch();

  const cartAction = () => {
    dispatch(itemActions.cartAction(item));
  };

  return (
    <Card>
      <img className={css.productImage} src={item.image} alt={"product"} />
      <div className={css.productName}>{item.name}</div>
      <div className={css.productPrice}>${item.price}</div>
      <div className={css.productDescription}>{item.description}</div>
      <div className={css.productBottom}>
        <Rating className={css.productRating} name="read-only" value={item.rate} readOnly />
        <WishButton action={cartAction}>{isCart ? <AiFillHeart /> : <AiOutlineHeart />} Watch</WishButton>
      </div>
    </Card>
  );
};

export { Item };
