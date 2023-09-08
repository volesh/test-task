import { Order } from "../enums/order-enum";

export const queryHelper = (
  search: string,
  order: Order | null,
  minPrice: number | null,
  maxPrice: number | null,
  rate: number | null
): string => {
  const searchConditions: string[] = [];
  if (search) {
    searchConditions.push(`name=${search}`);
  }
  if (rate) {
    searchConditions.push(`rate=${rate}`);
  }
  if (minPrice) {
    searchConditions.push(`minPrice=${minPrice}`);
  }
  if (maxPrice) {
    searchConditions.push(`maxPrice=${maxPrice}`);
  }
  if (order) {
    searchConditions.push(`order=${order}`);
  }
  if (searchConditions.length > 0) {
    const query = searchConditions.join("&");
    return `?${query}`;
  }
  return "";
};
