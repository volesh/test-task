import { FC, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { PriceContainer } from "./styled.component";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { searchActions } from "../../redux/slices/search.slice";

const Price: FC = () => {
  const [range, setRange] = useState<[number, number]>([0, 1000]);
  const dsipatch = useAppDispatch();

  const handlePriceChange = (value: [number, number]) => {
    setRange(value);
    dsipatch(searchActions.setPrice(value));
  };
  return (
    <>
      <PriceContainer>
        <Slider
          range
          min={0}
          max={1000}
          step={10}
          value={range}
          onChange={handlePriceChange as (value: number | number[]) => void}
        />
        <div>
          Price Range: ${range[0]} - ${range[1]}
        </div>
      </PriceContainer>
    </>
  );
};

export { Price };
