const { getYieldForPlant
    //getYieldForCrop,
    //getTotalYield
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
});