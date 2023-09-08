import { Item } from './schema/item-schema';
import mongoose from 'mongoose';
import { Order } from 'src/general/enums';
export declare class ItemsService {
    private itemModel;
    constructor(itemModel: mongoose.Model<Item>);
    findAll(name: string | null, rate: string | null, order: Order | null, minPrice: string | null, maxPrice: string | null): Promise<Item[]>;
    update(): mongoose.Query<mongoose.UpdateWriteOpResult, mongoose.Document<unknown, {}, Item> & Item & {
        _id: mongoose.Types.ObjectId;
    }, {}, Item, "updateMany">;
}
