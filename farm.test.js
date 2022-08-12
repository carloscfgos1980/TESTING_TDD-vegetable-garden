const { getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
} = require("./farm");



describe("getYieldForPlantEFs", () => {
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
        expect(getYieldForCrop(input, environmentFactors)).toBe(300);
    });
});


describe("getTotalYield", () => {
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
        expect(getTotalYield({ crops }, environmentFactors)).toBe("51.60");
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