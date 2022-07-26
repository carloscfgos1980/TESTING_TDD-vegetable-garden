const { getYieldForPlantEF, getYieldForPlantEFs, getTotalYieldEFs, getRevenueForCropEFs
} = require("./farm3");

describe("getYieldForPlantEF", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
    };

    test("Get yield for plant with one environment factors", () => {
        expect(getYieldForPlantEF(corn)).toBe(15);
    });
});

describe("getYieldForPlantEFs", () => {
    const avocado = {
        name: "avocado",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 0,
                medium: -20,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "high",
        wind: "medium",
    };

    test("Get yield for plant with several environment factors", () => {
        expect(getYieldForPlantEFs(avocado)).toBe(18);
    });
});

describe("getTotalYieldEFs", () => {
    const avocado = {
        name: "avocado",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 0,
                medium: -20,
                high: -40,
            },
        },
    };
    const banana = {
        name: "banana",
        yield: 10,
        factor: {
            sun: {
                low: -20,
                medium: 0,
                high: 20,
            },
            wind: {
                low: 0,
                medium: -10,
                high: -20,
            },
        },
    };
    const corn = {
        name: "corn",
        yield: 4,
        factor: {
            sun: {
                low: -20,
                medium: 0,
                high: 20,
            },
            wind: {
                low: 0,
                medium: 0,
                high: 0,
            },
        },
    };
    const crops = [
        { crop: avocado, numCrops: 20 },
        { crop: banana, numCrops: 50 },
        { crop: corn, numCrops: 20 },
    ];
    output = [{ "yieldAvocado": 18, "yieldBanana": 8.8, "yieldCorn": 3.2 }]
    test("Get yield with severral environmental factors", () => {
        expect(getTotalYieldEFs({ crops })).toStrictEqual(output);
    });
});

describe("getRevenueForCropEFs", () => {
    test("Get money obtein for the banana crop considering environmental factors", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const input = {
            crop: banana,
            numCrops: 50,
        };
        expect(getRevenueForCropEFs(input)).toBe(480);
    });
});