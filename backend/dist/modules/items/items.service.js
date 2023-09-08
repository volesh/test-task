"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const item_schema_1 = require("./schema/item-schema");
const mongoose_2 = require("mongoose");
const helpers_1 = require("../../general/helpers");
let ItemsService = class ItemsService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async findAll(name, rate, order, minPrice, maxPrice) {
        const { query, sort } = (0, helpers_1.buildQuery)(name, rate, order, minPrice, maxPrice);
        return this.itemModel.find(query).sort(sort).exec();
    }
    update() {
        return this.itemModel.updateMany({}, {
            image: 'data:image/png;base64,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',
        });
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_schema_1.Item.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], ItemsService);
//# sourceMappingURL=items.service.js.map