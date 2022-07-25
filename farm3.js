// const avocado = {
//     name: "avocado",
//     yield: 30,
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

const getYieldForPlantEF = (items) => {
    itemYield = '';
    eFactor = '';
    [items].forEach((item) => {
        itemYield = item.yield;
        eFactor = item.factor.sun.low
        console.log("itemYield value:", itemYield);
        console.log("Environment Factor:", eFactor);
    })
    eFactorPercent = (100 + eFactor) / 100;
    console.log("Percent low sun is:", eFactorPercent);
    //Get the factor in percent
    itemYieldEF = itemYield * eFactorPercent
    console.log("Product yield with  low sun is:", itemYieldEF);
    return itemYieldEF
}
//getYieldForPlantEF(corn);

const getYieldForPlantEFs = (items) => {
    itemYield = '';
    eFactor1 = '';
    eFactor2 = '';
    [items].forEach((item) => {
        itemYield = item.yield;
        eFactor1 = item.factor.sun.high;
        eFactor2 = item.factor.wind.medium;
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
//getYieldForPlantEFs(avocado);

const getTotalYieldEFs = (items) => {
    itemYieldEF = '';
    const yieldEF = (items, item1) => {

        const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);
        console.log(arraySelect)
        itemYield = '';
        eFactor1 = '';
        eFactor2 = '';

        arraySelect.forEach((item) => {
            itemYield = item.crop.yield;
            console.log("Item Yield is", itemYield)
            eFactor1 = item.crop.factor.sun.high
            console.log("Environment Factor(hig sun):", eFactor1);
            eFactor2 = item.crop.factor.wind.medium;
            console.log("Environment Factor(medium wind is):", eFactor2);
        });
        const environmentFactors = ((factor1, factor2) => {
            eFactorPercent1 = (100 - factor1) / 100;
            console.log("PErcent Environment Factor(hig sun):", eFactorPercent1);
            eFactorPercent2 = (100 - factor2) / 100;
            console.log("PErcent Environment Factor(medium wind):", eFactorPercent2);
            itemYieldEFs = itemYield * eFactorPercent1 * eFactorPercent2;
            console.log("Product yield with hig sun & medium wind is:", itemYieldEFs);
            return itemYieldEFs
        });
        environmentFactors(eFactor1, eFactor2);

        return itemYieldEFs;


    }

    const yieldAvocado = yieldEF(items, 'avocado');

    console.log("Avocado yield is:", yieldAvocado)

    const yieldBanana = yieldEF(items, 'banana');

    console.log("Avocado yield is:", yieldBanana)

    const yieldCorn = yieldEF(items, 'corn');

    console.log("Avocado yield is:", yieldCorn)

    totalYield = [{ yieldAvocado, yieldBanana, yieldCorn, }]

    console.log(totalYield)

    return totalYield
}

//getTotalYieldEFs({ crops });

module.exports = {
    getYieldForPlantEF,
    getYieldForPlantEFs,
    getTotalYieldEFs
};