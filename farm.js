
const getYieldForPlant = (items) => {
    [items].forEach((item) => {
        itemYield = item.yield;
        console.log("itemYield value:", itemYield);
    });
    return itemYield;
}

//getYieldForPlant(corn);

const getYieldForCrop = (items) => {

    const cornAmount = (items) => {
        [items].forEach((item) => {
            cornsss = item.numCrops;
            console.log("Amount of corn crops:", cornsss);
        });
        return cornsss;
    };
    const cornCrop = cornAmount(items);

    const getYieldForPlant2 = (items) => {
        [items].forEach((item) => {
            itemYield = item.crop.yield;
            console.log("itemYield value:", itemYield);
        });
        return itemYield;
    }

    const cornYield = getYieldForPlant2(items);

    const cornCropYield = cornYield * cornCrop;
    console.log("the amount of crop yielded is:", cornCropYield);
    return cornCropYield

}

//getYieldForCrop(input);


module.exports = {
    getYieldForPlant,
    getYieldForCrop
    //,getTotalYield
};