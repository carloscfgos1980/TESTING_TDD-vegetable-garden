
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

const getRevenueForCrop = (item) => {
    price = item.crop.price;
    //console.log("Price of the plant is:", price)
    cropYield = getYieldForCrop(item)
    //console.log("Yield of the plant is:", cropYield)

    revenueCrop = price * cropYield
    console.log("Revenue of the crop is:", revenueCrop)

    return revenueCrop
}
//getRevenueForCrop(input);

const getProfitForCrop = (item) => {
    const cropRevenue = getRevenueForCrop(item);
    //console.log("Revenue of the crop is:", cropRevenue)
    const cropCost = getCostsForCrop(item);
    //console.log("Cost of the crop is:", cropCost)
    cropProfit = cropRevenue - cropCost
    console.log("The profit of the crop is", cropProfit)
    return cropProfit
}
//getProfitForCrop(input);

const getTotalProfit = (items) => {
    console.log(items)
    const cropBanana = items.crops[0];
    console.log("First crop is:", cropBanana)

    const cropCorn = items.crops[1];
    console.log("Second crop is:", cropCorn)

    const cropPumkin = items.crops[2];
    console.log("Third crop is:", cropPumkin)

    const profitBanana = getProfitForCrop(cropBanana);

    const profitCorn = getProfitForCrop(cropCorn)

    const profitPumkin = getProfitForCrop(cropPumkin)

    result = [profitBanana, profitCorn, profitPumkin]

    const totalProfit = result.reduce((total, number) => {
        return total + number
    }, 0)
    console.log("Sums of yields is:", totalProfit);

    return totalProfit
}

//getTotalProfit({ crops })

// module.exports = {
//     getCostsForCrop,
//     getRevenueForCrop,
//     getProfitForCrop,
//     getTotalProfit
// };