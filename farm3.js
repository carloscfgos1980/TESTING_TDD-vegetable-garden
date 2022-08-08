// const avocado = {
//     name: "avocado",
//     yield: 30,
//     cost: 2,
//     price: 0.5,
//     factor: {
//         sun: {
//             low: -50,
//             medium: 0,
//             high: 50,
//         },
//         wind: {
//             low: 0,
//             medium: -20,
//             high: -40,
//         },
//     },
// };
// const banana = {
//     name: "banana",
//     yield: 10,
//     cost: 6,
//     price: 5,
//     factor: {
//         sun: {
//             low: -20,
//             medium: 0,
//             high: 20,
//         },
//         wind: {
//             low: 0,
//             medium: -10,
//             high: -20,
//         },
//     },
// };
// const corn = {
//     name: "corn",
//     yield: 4,
//     cost: 3,
//     price: 3,
//     factor: {
//         sun: {
//             low: -20,
//             medium: 0,
//             high: 20,
//         },
//         wind: {
//             low: 0,
//             medium: 0,
//             high: 0,
//         },
//     },
// };
// const crops = [
//     { crop: avocado, numCrops: 20 },
//     { crop: banana, numCrops: 50 },
//     { crop: corn, numCrops: 20 },
// ];
// const environmentFactors = {
//     sun: "high",
//     wind: "medium",
// };


const getYieldForPlantEF = (plant, eFactors) => {
    const lowSun = plant.factor.sun[eFactors.sun];
    console.log("Constant low sun:", lowSun);
    const percentLowSun = (100 + lowSun) / 100
    console.log("Percent of low sun:", percentLowSun);

    const plantYield = plant.yield
    console.log("Yield of the plant is:", plantYield)

    YieldEF = percentLowSun * plantYield
    console.log("Yield of the plant with low sun:", YieldEF);

}
//getYieldForPlantEF(corn, environmentFactors);

const getYieldForPlantEFs = (plant, eFactors) => {
    const HighSun = plant.factor.sun[eFactors.sun];
    //console.log("Constant high sun:", HighSun);
    const percentHighSun = (100 + HighSun) / 100
    //console.log("Percent of high sun:", percentHighSun);

    const mediumWind = plant.factor.wind[eFactors.wind];
    //console.log("Constant medium wind", mediumWind);
    const percentMediumWind = (100 + mediumWind) / 100
    //console.log("Percent of medium wind:", percentMediumWind);

    const plantYield = plant.yield
    //console.log("Yield of the plant is:", plantYield)

    YieldEFs = plantYield * percentHighSun * percentMediumWind
    console.log("Yield of the plant with low sun and medium wind:", YieldEFs);

    return YieldEFs
}
//getYieldForPlantEFs(avocado, environmentFactors);

const getTotalYieldEFs = (items) => {
    //console.log(items)
    const cropAvocado = items.crops[0].crop;
    //console.log("First crop is:", cropAvocado)

    const cropBanana = items.crops[1].crop;
    //console.log("Second crop is:", cropBanana)

    const cropCorn = items.crops[2].crop;
    //console.log("Third crop is:", cropCorn)

    const yieldEFsAvoacado = getYieldForPlantEFs(cropAvocado, environmentFactors);

    const yieldEFsBanana = getYieldForPlantEFs(cropBanana, environmentFactors);

    const yieldEFsCorn = getYieldForPlantEFs(cropCorn, environmentFactors);

    result = [yieldEFsAvoacado, yieldEFsBanana, yieldEFsCorn]

    const totalYieldEFs = result.reduce((total, number) => {
        return total + number
    }, 0)
    console.log("Sums of yields is:", totalYieldEFs)

    return totalYieldEFs

}

//getTotalYieldEFs({ crops });

const getRevenueForCropEFs = (item, eFactors) => {

    const getYieldForCropEFs = (item, eFactors) => {
        const plant = item.crop
        //console.log("Object plant is:", plant)

        const plantYield = getYieldForPlantEFs(plant, eFactors)
        //console.log("Yield for plant is:", plantYield)

        const cropNums = item.numCrops
        //console.log("The amount of plants is:", cropNums)

        yieldCrop = plantYield * cropNums
        //console.log("Yield for the crop is:", yieldCrop)

        return yieldCrop
    }
    price = item.crop.price;
    //console.log("Price of the plant is:", price)
    cropYield = getYieldForCropEFs(item, eFactors)
    //console.log("Yield of the plant is:", cropYield)

    revenueCrop = price * cropYield
    console.log("Revenue of the crop is:", revenueCrop)

    return revenueCrop
}
//getRevenueForCropEFs(input, environmentFactors);


const getProfitForCropEFs = (item, eFactors) => {
    const cropRevenue = getRevenueForCropEFs(item, eFactors);
    //console.log("Revenue of the crop is:", cropRevenue)
    const cropCost = getCostsForCrop(item);
    //console.log("Cost of the crop is:", cropCost)
    cropProfit = cropRevenue - cropCost
    console.log("The profit of the crop is", cropProfit)
    return cropProfit

}

//getProfitForCropEFs(input, environmentFactors);


const getTotalProfitEFs = (items) => {
    //console.log(items)
    const cropBanana = items.crops[0];
    //console.log("First crop is:", cropBanana)

    const cropCorn = items.crops[1];
    //console.log("Second crop is:", cropCorn)

    const cropPumkin = items.crops[2];
    //console.log("Third crop is:", cropPumkin)

    const profitBanana = getProfitForCropEFs(cropBanana, environmentFactors);

    const profitCorn = getProfitForCropEFs(cropCorn, environmentFactors)

    const profitPumkin = getProfitForCropEFs(cropPumkin, environmentFactors)

    result = [profitBanana, profitCorn, profitPumkin]

    const totalProfit = result.reduce((total, number) => {
        return total + number
    }, 0)
    console.log("Total profit is:", totalProfit);

    return totalProfit
}

//getTotalProfitEFs({ crops })

module.exports = {
    getYieldForPlantEF,
    getYieldForPlantEFs,
    getTotalYieldEFs,
    getRevenueForCropEFs,
    getProfitForCropEFs,
    getTotalProfitEFs
};