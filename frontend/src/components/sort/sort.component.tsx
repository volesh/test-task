import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { searchActions } from "../../redux/slices/search.slice";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Order } from "../../enums/order-enum";
import css from "./sort.module.css";

const Sort: FC = () => {
  const [sort, setSort] = useState<Order | null>(null);
  const dsipatch = useAppDispatch();

  const handleChange = (value: SelectChangeEvent<Order | null>) => {
    if (value.target.value === Order.High) {
      setSort(Order.High);
      dsipatch(searchActions.setOrder(Order.High));
    } else if (value.target.value === Order.Low) {
      setSort(Order.Low);
      dsipatch(searchActions.setOrder(Order.Low));
    } else {
      setSort(null);
      dsipatch(searchActions.setOrder(null));
    }
  };
  return (
    <div className={css.sortDiv}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sort} label="Age" onChange={handleChange}>
          <MenuItem value={Order.High}>From High to Low</MenuItem>
          <MenuItem value={Order.Low}>From Low to High</MenuItem>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export { Sort };
