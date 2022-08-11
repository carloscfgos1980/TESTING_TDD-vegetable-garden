
const getYieldForPlant = (plant, eFactors) => {
    plantYield = plant.yield

    if (eFactors === undefined) {
        console.log("Yield of the plant is:", plantYield)
        return plantYield;
    }

    calculation = (factor) => {
        if (factor === undefined) {
            return 1;
        } else {
            return (100 + factor) / 100;
        }
    };

    const factorSun = eFactors.sun;
    const sunny = calculation(plant.factor.sun[factorSun]);

    const factorWind = eFactors.wind;
    const windy = calculation(plant.factor.wind[factorWind]);



    outcome = plantYield * sunny * windy;

    console.log("Yield for plant is:", outcome)

    return outcome

    // const factorSun = eFactors.sun
    // const factorWind = eFactors.wind
    // const HighSun = plant.factor.sun[factorSun];
    // //console.log("Constant high sun:", HighSun);
    // const percentHighSun = (100 + HighSun) / 100
    // //console.log("Percent of high sun:", percentHighSun);

    // const mediumWind = plant.factor.wind[factorWind];
    // //console.log("Constant medium wind", mediumWind);
    // const percentMediumWind = (100 + mediumWind) / 100
    // //console.log("Percent of medium wind:", percentMediumWind);

    // const plantYield = plant.yield
    // //console.log("Yield of the plant is:", plantYield)

    // YieldEFs = plantYield * percentHighSun * percentMediumWind
    // console.log("Yield of the plant with low sun and medium wind:", YieldEFs);

    // return YieldEFs
}
//getYieldForPlant(corn);


module.exports = {
    getYieldForPlant
    //getYieldForCrop,
    //getTotalYield
};