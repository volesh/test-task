export interface ItemI {
  _id: string;
  name: string;
  description: string;
  rate: number;
  price: number;
  image: string;
}

export interface ItemStore {
  items: ItemI[];
  cart: ItemI[];
}
