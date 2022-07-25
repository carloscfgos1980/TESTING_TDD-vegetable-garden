

const environmentFactors = {
    sun: "high",
    wind: "medium",
};


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
    eFactorPercent1 = (100 + eFactor1) / 100;
    console.log("Percent high sun is:", eFactorPercent1);

    eFactorPercent2 = (100 + eFactor2) / 100;
    console.log("Percent medium wind is:", eFactorPercent2);
    //Get the factor in percent
    itemYieldEF = itemYield * eFactorPercent1 * eFactorPercent2;
    console.log("Product yield with hig sun & medium wind is:", itemYieldEF);
    return itemYieldEF
}

//getYieldForPlantEFs(avocado);

module.exports = {
    getYieldForPlantEF,
    getYieldForPlantEFs
};