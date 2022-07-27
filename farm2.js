
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

const getTotalProfit = (items) => {
    const production = (items, item1) => {

        const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);

        let amount = ''; //Get the value inside the forEach  
        let itemYield = '';
        let cost = '';
        let price = '';
        arraySelect.forEach((item) => {
            amount = item.numCrops;
            itemYield = item.crop.yield;
            cost = item.crop.cost;
            price = item.crop.price;
        });

        // Revenues = itemYield * amount * price
        // Cost of growing the product = amount * cost
        total = (itemYield * amount * price) - (amount * cost);
        console.log("precio del producto:", total)
        return total

    }

    const totalCorn = production(items, 'corn');

    const totalPumpkin = production(items, 'pumpkin');

    const totalBanana = production(items, 'banana');

    totalCrop = totalCorn + totalPumpkin + totalBanana;

    console.log("Produccion total es:", totalCrop)

    return totalCrop
}

//getTotalProfit({ crops })

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};