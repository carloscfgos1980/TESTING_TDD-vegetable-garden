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

    const getYieldForCropCorn = (items) => {
        const cropCorn = items.filter(item => item.crop === corn);
        //console.log(cropCorn);

        let cornAmount = '';
        cropCorn.forEach((item) => {
            cornAmount = item.numCrops;
            //console.log("Amount of corn:", cornAmount);
            return cornAmount;
        });

        //console.log("result of forEach of corn amount:", cornAmount)

        let cornYield = '';
        cropCorn.forEach((item) => {
            cornYield = item.crop.yield;
            //console.log("Yield of corn:", cornYield);
            return cornYield
        });

        //console.log("result of forEach for corn yield:", cornYield)

        const cornTotal = cornAmount * cornYield;
        console.log(cornTotal);
    }

    getYieldForCropCorn(crops);

}


getTotalYield(crops);
// module.exports = {
//     getYieldForPlant,
//     getYieldForCrop
//     //,getTotalYield
// };