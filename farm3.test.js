const { getYieldForPlantEF
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

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlantEF(corn)).toBe(15);
    });
});