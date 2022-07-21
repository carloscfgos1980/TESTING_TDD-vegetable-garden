const corn = {
    name: "corn",
    yield: 3,
};
const pumpkin = {
    name: "pumpkin",
    yield: 4,
};
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2 },
];




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
    console.log("corn Yielded:", cornYield)

    const cornCropYield = cornYield * cornCrop;
    console.log("the amount of crop yielded is:", cornCropYield);
    return cornCropYield

}
//getYieldForCrop(input);



const getTotalYield = (items) => {

    let cornTotal = '';
    const getYieldForCropCorn = (items) => {
        const array = items.filter(item => item.crop === corn);

        let cornAmount = '';
        array.forEach((item) => {
            cornAmount = item.numCrops;
        });

        let cornYield = '';
        array.forEach((item) => {
            cornYield = item.crop.yield;
        });

        cornTotal = cornAmount * cornYield;
    }
    getYieldForCropCorn(crops);
    //console.log("Total corn is:", cornTotal)

    let pumpkinTotal = '';
    const getYieldForCropPumpkin = (items) => {

        const array = items.filter(item => item.crop === pumpkin);

        let pumpkinAmount = '';
        array.forEach((item) => {
            pumpkinAmount = item.numCrops;
        });

        let pumpkinYield = '';
        array.forEach((item) => {
            pumpkinYield = item.crop.yield;
        });

        pumpkinTotal = pumpkinAmount * pumpkinYield;
    }
    getYieldForCropPumpkin(crops);
    //console.log("Total pumpkin is:", pumpkinTotal)

    const totalYield = cornTotal + pumpkinTotal;
    console.log("total yield is:", totalYield)
    return totalYield;

}
getTotalYield({ crops });
// module.exports = {
//     getYieldForPlant,
//     getYieldForCrop
//     //,getTotalYield
// };