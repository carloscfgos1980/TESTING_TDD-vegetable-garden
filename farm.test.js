const { getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./farm");



describe("getYieldForPlant", () => {
    test("Get yield for plant with several environment factors", () => {
        const corn = {
            name: "corn",
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
        expect(getYieldForPlant(corn, environmentFactors)).toBe(36);
    });
    test("Get yield for plant with no environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        expect(getYieldForPlant(corn)).toBe(30);
    });
    test("Get yield for plant with one environment factors", () => {
        const corn = {
            name: "corn",
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
            sun: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(360);
    });
});

describe("getTotalYield", () => {
    test("Get yield with several environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            cost: 2,
            price: 0.5,
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
            cost: 6,
            price: 5,
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
            cost: 3,
            price: 3,
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
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(1356);
    });
});

describe("getCostsForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        price: 4,
        cost: 6,
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
    const input = {
        crop: corn,
        numCrops: 10,
    };

    test("Get the cost for corn", () => {
        expect(getCostsForCrop(input)).toBe(60);
    });
});

describe("getRevenueForCrop", () => {
    test("Get revenue for the banana crop considering environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            price: 4,
            cost: 6,
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(1440);
    });
});

describe("getProfitForCrop", () => {
    test("Get profit of banana crop with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            price: 4,
            cost: 6,
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(1380);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit of Avocado, Banana and Corn taking in account environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            cost: 2,
            price: 0.5,
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
            cost: 6,
            price: 5,
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
            cost: 3,
            price: 3,
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
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(2948);
    });
});