const { getYieldForPlantEF, getYieldForPlantEFs, getTotalYieldEFs, getRevenueForCropEFs, getProfitForCropEFs, getTotalProfitEFs
} = require("./farm3");

describe("getYieldForPlantEF", () => {
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
            },
        };

        const environmentFactors = {
            sun: "low",
        };
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
        expect(getYieldForPlantEFs(avocado)).toBe(36);
    });
});

describe("getTotalYieldEFs", () => {
    test("Get yield with several environmental factors", () => {
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
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalYieldEFs({ crops })).toBe(51.599999999999994);
    });
});

describe("getRevenueForCropEFs", () => {
    test("Get revenue for the banana crop considering environmental factors", () => {
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
        const input = {
            crop: avocado,
            numCrops: 20,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getRevenueForCropEFs(input)).toBe(360);
    });
});

describe("getProfitForCropEFs", () => {
    test("Get profit of banana crop with environmental factors", () => {
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
        const input = {
            crop: avocado,
            numCrops: 20,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getProfitForCropEFs(input)).toBe(320);
    });
});

describe("getTotalProfitEFs", () => {
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
        expect(getTotalProfitEFs({ crops })).toBe(2948);
    });
});