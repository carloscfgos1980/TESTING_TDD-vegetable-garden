


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

module.exports = {
    getYieldForPlantEF
};