const { getYieldForPlantEF, getYieldForPlantEFs
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
        expect(getYieldForPlantEFs(avocado)).toBe(36);
    });
});