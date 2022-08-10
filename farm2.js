
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
    //console.log(items)

    const cropsYield = items.crops.map((elem) => {
        outcome = getProfitForCrop(elem)

        // console.log("Outcome Profit:", outcome)
        return outcome
    });
    totalProfit = cropsYield.reduce((acc, cur) => acc + cur);

    console.log("Total Pfofit is", totalProfit)
    return totalProfit
}
//getTotalProfit({ crops })


module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};