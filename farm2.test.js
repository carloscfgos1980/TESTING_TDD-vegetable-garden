const { getCostsForCrop, getRevenueForCrop } = require("./farm2");

describe("getCostsForCrop", () => {
    const banana = {
        name: "banana",
        yield: 30,
        cost: 3,
        price: 5,
    };

    test("Get the cost for corn", () => {
        expect(getCostsForCrop(banana)).toBe(3);
    });
});

describe("getRevenueForCrop", () => {
    test("Get money obtein for the banana crop", () => {
        const banana = {
            name: "banana",
            yield: 30,
            cost: 3,
            price: 5,
        };
        const input = {
            crop: banana,
            numCrops: 50,
        };
        expect(getRevenueForCrop(input)).toBe(250);
    });
});