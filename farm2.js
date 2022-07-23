const banana = {
    name: "banana",
    yield: 2,
    cost: 3,
    price: 5,
};
const input = {
    crop: banana,
    numCrops: 50,
};
const getCostsForCrop = (items) => {
    const getCostItem = (items) => {
        [items].forEach((item) => {
            cost = item.crop.cost;
        });
        return cost;
    }
    const itemCost = getCostItem(items);

    const cropNum = (items) => {
        [items].forEach((item) => {
            amount = item.numCrops;
        });
        return amount;
    };
    const cropAmount = cropNum(items);
    cropCost = itemCost * cropAmount
    return cropCost
}
//getCostsForCrop(corn);

const getRevenueForCrop = (items) => {

    const getYield = (items) => {
        [items].forEach((item) => {
            itemYield = item.crop.yield;
        });
        return itemYield;
    }
    const cropYield = getYield(items);

    const getPrice = (items) => {
        [items].forEach((item) => {
            price = item.crop.price;
        });
        return price;
    }
    const cropPrice = getPrice(items);

    const cropNum = (items) => {
        [items].forEach((item) => {
            amount = item.numCrops;
        });
        return amount;
    };
    const cropAmount = cropNum(items);


    cropRevenue = cropPrice * cropYield * cropAmount;
    console.log("Revenue of Banana crop is", cropRevenue)
    return cropRevenue

}
//getRevenueForCrop(input);

const getProfitForCrop = (items) => {
    const itemRevenue = getRevenueForCrop(items);
    const itemCost = getCostsForCrop(items);
    console.log("Cost of growing banana is:", itemCost)
    itemProfit = itemRevenue - itemCost
    console.log("The profit of the banana crop is", itemProfit)
    return itemProfit
}
//getProfitForCrop(input);

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
};