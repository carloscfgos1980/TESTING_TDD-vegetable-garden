
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

const getYieldForCrop = (item, eFactors) => {
    plant = item.crop
    plantYield = getYieldForPlant(plant, eFactors)
    //console.log("Yield for plant is:", plantYield)

    const cropNums = item.numCrops
    //console.log("The amount of plants is:", cropNums)

    yieldCrop = plantYield * cropNums
    console.log("Yield for the crops is:", yieldCrop)
    return yieldCrop;
}
//getYieldForCrop(input, environmentFactors)

const getTotalYield = (items, eFactors) => {
    const cropsYield = items.crops.map((elem) => {
        //console.log(elem.crop)
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

const getRevenueForCrop = (item, eFactors) => {
    cropYield = getYieldForCrop(item, eFactors)
    //console.log("Yield of the plant is:", cropYield)

    price = item.crop.price;
    //console.log("Price of the plant is:", price)

    revenueCrop = cropYield * price
    console.log("Revenue of the crop is:", revenueCrop)
    return revenueCrop
}
//getRevenueForCrop(input, environmentFactors);

const getProfitForCrop = (item, eFactors) => {
    const cropRevenue = getRevenueForCrop(item, eFactors);
    //console.log("Revenue of the crop is:", cropRevenue)
    const cropCost = getCostsForCrop(item);
    //console.log("Cost of the crop is:", cropCost)
    cropProfit = cropRevenue - cropCost
    console.log("The profit of the crop is", cropProfit)
    return cropProfit
}
//getProfitForCrop(input, environmentFactors);

const getTotalProfit = (items, eFactors) => {
    const cropsYield = items.crops.map((elem) => {
        outcome = getProfitForCrop(elem, eFactors)
        // console.log("Outcome Profit:", outcome)
        return outcome
    });

    totalProfit = cropsYield.reduce((acc, cur) => acc + cur);
    console.log("Total Profit is", totalProfit)
    return totalProfit
}
//getTotalProfitEFs({ crops }, environmentFactor)

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};