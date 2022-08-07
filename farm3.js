const avocado = {
    name: "avocado",
    yield: 30,
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
    console.log(items)
    const cropAvocado = items.crops[0].crop;
    console.log("First crop is:", cropAvocado)

    const cropBanana = items.crops[1].crop;
    console.log("Second crop is:", cropBanana)

    const cropCorn = items.crops[2].crop;
    console.log("Third crop is:", cropCorn)

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

getTotalYieldEFs({ crops });

const getRevenueForCropEFs = (items) => {
    console.log(items)
    const yieldEF = (items) => {
        itemYield = '';
        eFactor1 = '';
        eFactor2 = '';
        [items].forEach((item) => {
            itemYield = item.crop.yield;
            console.log("Item yield without EF:", itemYield)
            eFactor1 = item.crop.factor.sun.high;
            eFactor2 = item.crop.factor.wind.medium;
            console.log("itemYield value:", itemYield);
            console.log("Environment Factor(hig sun):", eFactor1);
            console.log("Environment Factor(medium wind):", eFactor2);
        })
        eFactorPercent1 = (100 - eFactor1) / 100;
        console.log("Percent high sun is:", eFactorPercent1);

        eFactorPercent2 = (100 - eFactor2) / 100;
        console.log("Percent medium wind is:", eFactorPercent2);
        //Get the factor in percent
        itemYieldEF = itemYield * eFactorPercent1 * eFactorPercent2;
        console.log("Product yield with hig sun & medium wind is:", itemYieldEF);
        return itemYieldEF
    }
    const yieldEFs = yieldEF(items);

    price = '';
    amount = '';
    [items].forEach((item) => {
        price = item.crop.price;
        console.log("Item price:", price)
        amount = item.numCrops;
        console.log("Item amount:", amount)
    });

    revenue = yieldEFs * amount * price
    console.log("Item revenue with EF is:", revenue)
    return revenue
}
//getRevenueForCropEFs(input);


const getProfitForCropEFs = (items) => {

    const cropRevenue = getRevenueForCropEFs(items);

    const getCostCropEFs = (items) => {
        cost = '';
        amount = '';
        [items].forEach((item) => {
            cost = item.crop.cost;
            console.log("Item cost:", cost)
            amount = item.numCrops;
            console.log("Item amount:", amount)
        });
        totalCost = amount * price
        console.log("The cost of growing this crop with EF is:", totalCost)
        return totalCost
    }
    const cropCost = getCostCropEFs(items);

    cropProfit = cropRevenue - cropCost

    console.log("The profit of the crop is:", cropProfit)

    return cropProfit

}

//getProfitForCropEFs(input);


const getTotalProfitEFs = (items) => {

    const yieldEFs = getTotalYieldEFs(items);
    console.log(yieldEFs);
    avocadoYield = '';
    bananaYield = '';
    cornYield = '';
    yieldEFs.forEach((item) => {
        avocadoYield = item.yieldAvocado
        console.log("Yield of Avocado is:", avocadoYield)
        bananaYield = item.yieldBanana
        console.log("Yield of Banana is:", bananaYield)
        cornYield = item.yieldCorn
        console.log("Yield of Corn is:", cornYield)
    })

    const production = (items, item1, itemYield) => {

        const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);

        let amount = ''; //Get the value inside the forEach  
        let cost = '';
        let price = '';
        arraySelect.forEach((item) => {
            amount = item.numCrops;
            console.log("amount is:", amount)
            cost = item.crop.cost;
            console.log("cost is:", cost)
            price = item.crop.price;
            console.log("price is:", price)
        });
        console.log("yield of the item is:", itemYield)
        cropRevenue = itemYield * amount * price
        console.log("The total revenue of the crops is", cropRevenue)
        cropCost = amount * cost
        console.log("The total cost of the crops is", cropCost)

        Total = cropRevenue - cropCost
        console.log("profit of the item del producto:", Total)
        return Total

    }
    const totalPumpkin = production(items, 'avocado', avocadoYield);

    const totalBanana = production(items, 'banana', bananaYield);

    const totalCorn = production(items, 'corn', cornYield);

    totalCrop = totalCorn + totalPumpkin + totalBanana;

    console.log("The profit for all the crops are:", totalCrop)

    return totalCrop
}

//getTotalProfitEFs({ crops })

// module.exports = {
//     getYieldForPlantEF,
//     getYieldForPlantEFs,
//     getTotalYieldEFs,
//     getRevenueForCropEFs,
//     getProfitForCropEFs,
//     getTotalProfitEFs
// };