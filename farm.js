// const corn = {
//     name: "corn",
//     yield: 3,
// };
// const pumpkin = {
//     name: "pumpkin",
//     yield: 4,
// };
// const crops = [
//     { crop: corn, numCrops: 5 },
//     { crop: pumpkin, numCrops: 2 },
// ];


const getYieldForPlant = (items) => {
    // In this case Items (corn) is not an array so I turn into an array by adding []
    [items].forEach((item) => {
        itemYield = item.yield;
        //console.log("itemYield value:", itemYield);
    });
    return itemYield;
}
//getYieldForPlant(corn);

const getYieldForCrop = (items) => {
    //items is an objet and I need to turn it into an array. I do that by encalaupated within []
    const cornAmount = (items) => {
        [items].forEach((item) => {
            cornsss = item.numCrops;
        });
        return cornsss;
    };
    const cornCrop = cornAmount(items);

    const getYieldForPlant1 = (items) => {
        [items].forEach((item) => {
            itemYield = item.crop.yield;
        });
        return itemYield;
    }

    const cornYield = getYieldForPlant1(items);

    const cornCropYield = cornYield * cornCrop;
    return cornCropYield

}
//getYieldForCrop(input);


const getTotalYield = (products) => {

    const getArray = (products, item1) => {
        const arrayItems = Object.values(products); //to convert an object to an array
        const arraySelect = arrayItems[0].filter(el => el.crop.name === item1);
        console.log("Selected array:", arraySelect)
        return arraySelect
    }

    const getYieldForCrop1 = (items) => {
        //items is an objet and I need to turn it into an array. I do that by encalaupated within []
        const cornAmount = (items) => {
            items.forEach((item) => {
                cornsss = item.numCrops;
            });
            return cornsss;
        };
        const cornCrop = cornAmount(items);

        const getYieldForPlant1 = (items) => {
            items.forEach((item) => {
                itemYield = item.crop.yield;
            });
            return itemYield;
        }

        const cornYield = getYieldForPlant1(items);

        const cornCropYield = cornYield * cornCrop;
        return cornCropYield

    }

    const cropCorn = getArray(products, 'corn');

    const cropPumpkin = getArray(products, 'pumpkin');

    const yieldCorn = getYieldForCrop1(cropCorn);

    console.log("Yield for corn is:", yieldCorn)

    const yieldPumpkin = getYieldForCrop1(cropPumpkin);

    console.log("Yield for pumking is:", yieldPumpkin);


    totalYieldCRop = yieldCorn + yieldPumpkin;
    console.log("Total Yield is:", totalYieldCRop)

    return totalYieldCRop
}
//getTotalYield({ crops });


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};