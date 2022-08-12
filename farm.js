
const getYieldForPlant = (plant, eFactors) => {
    plantYield = plant.yield

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

const getYieldForCrop = (item) => {
    plant = item.crop
    //console.log("Object plant is:", plant)

    plantYield = getYieldForPlant(plant)
    //console.log("Yield for plant is:", plantYield)

    const cropNums = item.numCrops
    //console.log("The amount of plants is:", cropNums)

    yieldCrop = plantYield * cropNums
    console.log("Yield for the crop is:", yieldCrop)

    return yieldCrop;
}
//getYieldForCrop(input, environmentFactors)

const getTotalYield = (items, eFactors) => {
    //console.log(items)

    const cropsYield = items.crops.map((elem) => {
        console.log(elem.crop)
        crop = elem.crop
        outcome = getYieldForPlant(crop, eFactors)

        // console.log("Outcome Profit:", outcome)
        return outcome
    });
    totalYield = cropsYield.reduce((acc, cur) => acc + cur);
    total = totalYield.toFixed(2);

    console.log("Total Pfofit is", total)
    return total
}
//getTotalYield({ crops }, environmentFactors);

const getCostsForCrop = (item) => {
    price = item.crop.cost;
    //console.log("Cost of the plant is:", price)

    amount = item.numCrops;
    //console.log("The number of plants is:", amount)

    cropCost = price * amount
    console.log("Cost of the crop is:", cropCost)

    return cropCost
}
//getCostsForCrop(input);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
};