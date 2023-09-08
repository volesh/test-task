"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQuery = void 0;
function buildQuery(name, rate, order, minPrice, maxPrice) {
    const query = {};
    if (name) {
        query.$or = [
            { name: { $regex: name, $options: 'i' } },
            { description: { $regex: name, $options: 'i' } },
        ];
    }
    if (minPrice && maxPrice) {
        const parsedMinPrice = parseFloat(minPrice);
        const parsedMaxPrice = parseFloat(maxPrice);
        query.price = { $gte: parsedMinPrice, $lte: parsedMaxPrice };
    }
    else if (minPrice) {
        const parsedMinPrice = parseFloat(minPrice);
        query.price = { $gte: parsedMinPrice };
    }
    else if (maxPrice) {
        const parsedMaxPrice = parseFloat(maxPrice);
        query.price = { $lte: parsedMaxPrice };
    }
    if (rate) {
        const parsedRate = parseInt(rate);
        if (!isNaN(parsedRate)) {
            query.rate = { $gte: parsedRate };
        }
    }
    const sort = {};
    if (order === 'low') {
        sort.price = 1;
    }
    else if (order === 'high') {
        sort.price = -1;
    }
    return { query, sort };
}
exports.buildQuery = buildQuery;
//# sourceMappingURL=query-helper.js.map