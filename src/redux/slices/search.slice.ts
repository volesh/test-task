import { Order } from "../../enums/order-enum";
import { SearchConditionI } from "../../interfaces/search.interface";
import {} from "../../services/items.service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchConditionI = {
  search: "",
  order: null,
  minPrice: null,
  maxPrice: null,
  rate: null,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<Order | null>) => {
      state.order = action.payload;
    },
    setPrice: (state, action: PayloadAction<[number, number]>) => {
      state.minPrice = action.payload[0];
      state.maxPrice = action.payload[1];
    },
    setRate: (state, action: PayloadAction<number | null>) => {
      state.rate = action.payload;
    },
  },
  extraReducers: {},
});

const {
  reducer: searchReducer,
  actions: { setSearch, setOrder, setPrice, setRate },
} = searchSlice;

const searchActions = { setSearch, setOrder, setPrice, setRate };

export { searchReducer, searchActions };
