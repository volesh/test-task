import { FC, useState } from "react";
import { Logo, HeaderDiv, InputContainer, Batch } from "./styled.components";
import { BiSearch } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import css from "./header.module.css";
import { WishButton } from "../wish-button/button.component";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { searchActions } from "../../redux/slices/search.slice";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const { cart } = useAppSelector((state) => state.itemsReducer);
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleInput = (event: any) => {
    setInput(event.target.value);
    dispatch(searchActions.setSearch(event.target.value));
  };

  const clearInput = () => {
    setInput("");
    dispatch(searchActions.setSearch(""));
  };

  return (
    <>
      <HeaderDiv>
        <Logo onClick={() => navigate("items")}>
          <div className={css.logoContainer}>
            <p className={css.logoText}>S</p>
          </div>
          <h1>Shopka</h1>
        </Logo>
        <InputContainer>
          <div className={css.searchIcon}>
            <BiSearch />
          </div>
          <input className={css.searchInput} type="text" placeholder="Search" value={input} onChange={handleInput} />
          <div className={css.clearIcon} onClick={clearInput}>
            <ImCross />
          </div>
        </InputContainer>
        <div>
          <WishButton action={() => navigate("/favorite")}>
            <p className={css.buttonText}>Watch</p>
            {cart.length > 0 && <Batch>{cart.length}</Batch>}
          </WishButton>
        </div>
      </HeaderDiv>
    </>
  );
};

export { Header };
