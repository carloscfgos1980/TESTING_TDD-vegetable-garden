
const getYieldForPlant = (plant, eFactors) => {
    plantYield = plant.yield

    console.log("eFactors:", eFactors)

    if (eFactors === undefined) {
        console.log("Yield of the plant is:", plantYield)
        return plantYield;
    }
    calculation = (eFactor) => {
        if (eFactor === undefined) {
            return 1;
        } else {
            return (100 + eFactor) / 100;
        }
    };

    const factorSun = eFactors.sun;
    const sunny = calculation(plant.factor.sun[factorSun]);

    const factorWind = eFactors.wind;
    const windy = calculation(plant.factor.wind[factorWind]);

    outcome = plantYield * sunny * windy;
    console.log("Yield for plant is:", outcome)

    return outcome
}
//getYieldForPlant(corn, environmentFactors);


module.exports = {
    getYieldForPlant
    //getYieldForCrop,
    //getTotalYield
};