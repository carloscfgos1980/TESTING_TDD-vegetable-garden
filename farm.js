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
        console.log("itemYield value:", itemYield);
    });
    return itemYield;
}
//getYieldForPlant(corn);

const getYieldForCrop = (items) => {
    // This method worked in order to grab the value inside the function but when I tried it later, it didn't work... no fucking clue what I was doing wrong. I found another method to do it.
    const cornAmount = (items) => {
        [items].forEach((item) => {
            cornsss = item.numCrops;
        });
        return cornsss;
    };
    const cornCrop = cornAmount(items);

    const getYieldForPlant2 = (items) => {
        [items].forEach((item) => {
            itemYield = item.crop.yield;
        });
        return itemYield;
    }

    const cornYield = getYieldForPlant2(items);

    const cornCropYield = cornYield * cornCrop;
    return cornCropYield

}
//getYieldForCrop(input);



const getTotalYield = (items) => {
    // production is a function that I can use for all the crops. I just have to change the second parameter that will adopt the value of item1
    const production = (items, item1) => {

        const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);

        let amount = ''; //Get the value inside the forEach  
        let itemYield = '';
        arraySelect.forEach((item) => {
            amount = item.numCrops;
            itemYield = item.crop.yield;
        });

        total = amount * itemYield;
        return total

    }

    const totalCorn = production(items, 'corn');

    const totalPumpkin = production(items, 'pumpkin');

    totalCrop = totalCorn + totalPumpkin;

    return totalCrop

}
//getTotalYield({ crops });


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};