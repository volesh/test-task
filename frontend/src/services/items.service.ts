import { ItemI } from "../interfaces/item.interface";
import { axiosService } from "./axios.service";

const itemsService = {
  getGenres: async (query: string): Promise<ItemI[]> => {
    const { data } = await axiosService.get(`/items${query}`);
    return data;
  },
};

export { itemsService };
