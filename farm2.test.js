const { getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit
} = require("./farm2");

describe("getCostsForCrop", () => {
    const banana = {
        name: "banana",
        yield: 2,
        cost: 3,
        price: 5,
    };
    const input = {
        crop: banana,
        numCrops: 50,
    };

    test("Get the cost for corn", () => {
        expect(getCostsForCrop(input)).toBe(150);
    });
});

describe("getRevenueForCrop", () => {
    test("Get money obtein for the banana crop", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
        };
        const input = {
            crop: banana,
            numCrops: 50,
        };
        expect(getRevenueForCrop(input)).toBe(500);
    });
});

describe("getProfitForCrop", () => {
    test("Get profit of banana crop", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
        };
        const input = {
            crop: banana,
            numCrops: 50,
        };
        expect(getProfitForCrop(input)).toBe(350);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit of Banana, Corn and Pumpkin", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
        };
        const corn = {
            name: "corn",
            yield: 3,
            cost: 2,
            price: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            cost: 1,
            price: 1.5,
        };
        const crops = [
            { crop: banana, numCrops: 20 },
            { crop: corn, numCrops: 50 },
            { crop: pumpkin, numCrops: 20 },
        ];
        expect(getTotalProfit({ crops })).toBe(590);
    });
});