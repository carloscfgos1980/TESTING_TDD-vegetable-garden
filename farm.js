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
        outcome = getYieldForCrop(elem, eFactors)
        console.log("Outcome Profit:", outcome)
        return outcome
    });
    totalYield = cropsYield.reduce((acc, cur) => acc + cur);

    console.log("Total Yield is", totalYield)
    return totalYield
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