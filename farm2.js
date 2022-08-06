// const banana = {
//     name: "banana",
//     yield: 2,
//     cost: 3,
//     price: 5,
// };
// const corn = {
//     name: "corn",
//     yield: 3,
//     cost: 2,
//     price: 3,
// };
// const pumpkin = {
//     name: "pumpkin",
//     yield: 4,
//     cost: 1,
//     price: 1.5,
// };
// const crops = [
//     { crop: banana, numCrops: 20 },
//     { crop: corn, numCrops: 50 },
//     { crop: pumpkin, numCrops: 20 },
// ];
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
    console.log("Revenue of this crop is", cropRevenue)
    return cropRevenue

}
//getRevenueForCrop(input);

const getProfitForCrop = (items) => {
    const itemRevenue = getRevenueForCrop(items);
    const itemCost = getCostsForCrop(items);
    //console.log("Cost of growing banana is:", itemCost)
    itemProfit = itemRevenue - itemCost
    //console.log("The profit of the banana crop is", itemProfit)
    return itemProfit
}
//getProfitForCrop(input);
const getProfitForCrop1 = (items) => {
    const getCostsForCrop1 = (items) => {
        const getCostItem = (items) => {
            items.forEach((item) => {
                cost = item.crop.cost;
            });
            return cost;
        }
        const itemCost = getCostItem(items);

        const cropNum = (items) => {
            items.forEach((item) => {
                amount = item.numCrops;
            });
            return amount;
        };
        const cropAmount = cropNum(items);
        cropCost = itemCost * cropAmount
        return cropCost
    }
    const getRevenueForCrop1 = (items) => {

        const getYield = (items) => {
            items.forEach((item) => {
                itemYield = item.crop.yield;
            });
            return itemYield;
        }
        const cropYield = getYield(items);

        const getPrice = (items) => {
            items.forEach((item) => {
                price = item.crop.price;
            });
            return price;
        }
        const cropPrice = getPrice(items);

        const cropNum = (items) => {
            items.forEach((item) => {
                amount = item.numCrops;
            });
            return amount;
        };
        const cropAmount = cropNum(items);


        cropRevenue = cropPrice * cropYield * cropAmount;
        console.log("Revenue of this crop is", cropRevenue)
        return cropRevenue

    }
    const itemRevenue = getRevenueForCrop1(items);
    const itemCost = getCostsForCrop1(items);
    //console.log("Cost of growing banana is:", itemCost)
    itemProfit = itemRevenue - itemCost
    //console.log("The profit of the banana crop is", itemProfit)
    return itemProfit
}
const getTotalProfit = (products) => {
    const getArray = (products, item1) => {
        const arrayItems = Object.values(products); //to convert an object to an array
        const arraySelect = arrayItems[0].filter(el => el.crop.name === item1);
        //console.log("Selected array:", arraySelect)
        return arraySelect
    }

    const cropBanana = getArray(products, 'banana');

    const cropCorn = getArray(products, 'corn');

    const cropPumpkin = getArray(products, 'pumpkin');

    const profitBanana = getProfitForCrop1(cropBanana);
    console.log("Pofit of the banana is:", profitBanana)

    const profitCorn = getProfitForCrop1(cropCorn);
    console.log("Pofit of the Corn is:", profitCorn)

    const profitPumpkin = getProfitForCrop1(cropPumpkin);
    console.log("Pofit of the Pumpkin is:", profitPumpkin)

    result = [profitBanana, profitCorn, profitPumpkin];

    console.log("Array all of profits:", result)

    const totalProfit = result.reduce((total, number) => {
        return total + number
    }, 0)
    console.log("All of profits:", totalProfit);

    return totalProfit;


}

//getTotalProfit({ crops })

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};