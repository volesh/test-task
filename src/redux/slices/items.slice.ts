import { ItemI, ItemStore } from "../../interfaces/item.interface";
import { itemsService } from "../../services/items.service";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: ItemStore = {
  items: [],
  cart: [],
};

const getItems = createAsyncThunk("itemsSlice/getItems", async (query: string, { rejectWithValue }) => {
  try {
    const data = await itemsService.getGenres(query);
    return data;
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    cartAction: (state, action: PayloadAction<ItemI>) => {
      const index = state.cart.findIndex((elem) => elem._id === action.payload._id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      } else {
        state.cart.push(action.payload);
      }
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getItems.fulfilled, (state, action: PayloadAction<ItemI[]>) => {
      state.items = action.payload;
    }),
});

const {
  reducer: itemsReducer,
  actions: { cartAction },
} = itemsSlice;

const itemActions = {
  getItems,
  cartAction,
};

export { itemsReducer, itemActions };
