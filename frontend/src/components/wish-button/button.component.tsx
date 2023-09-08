import { FC, ReactNode, MouseEventHandler } from "react";
import { Button } from "./styled.components";

interface WishButtonProps {
  children: ReactNode;
  action: Function;
}

const WishButton: FC<WishButtonProps> = (props) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.action();
  };
  return (
    <>
      <Button onClick={handleClick}>{props.children}</Button>
    </>
  );
};

export { WishButton };
