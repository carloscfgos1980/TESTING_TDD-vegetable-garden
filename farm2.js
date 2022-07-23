
const getCostsForCrop = (items) => {
    [items].forEach((item) => {
        cost = item.cost;
        console.log("Cost of corn is:", cost);
    });
    return cost;
}
//getCostsForCrop(corn);

const getRevenueForCrop = (items) => {

    const cropNum = (items) => {
        [items].forEach((item) => {
            amount = item.numCrops;
        });
        return amount;
    };
    const cropAmount = cropNum(items);

    const getPrice = (items) => {
        [items].forEach((item) => {
            itemYield = item.crop.price;
        });
        return itemYield;
    }

    const cropYield = getPrice(items);

    cropRevenue = cropAmount * cropYield;
    return cropRevenue

}



module.exports = {
    getCostsForCrop,
    getRevenueForCrop
};