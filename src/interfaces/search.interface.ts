import { Order } from "../enums/order-enum";

export interface SearchConditionI {
  search: string;
  order: Order | null;
  minPrice: number | null;
  maxPrice: number | null;
  rate: number | null;
}
