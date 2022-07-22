

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

    const arrayItems = Object.values(items);//In this case items take this value {crops} which is an object and we have to turn into an array with this method

    let cornTotal = '';//to grab the value of a variable inside a function

    console.log(arrayItems[0]);// since we have to array, I use [0] to grab the first array which is the one I need

    const arrayCorn = arrayItems[0].filter(item => item.crop.name === 'corn');// filter and get a new array with the elements that I need

    //get corn amount 
    let cornAmount = '';
    arrayCorn.forEach((item) => {
        cornAmount = item.numCrops;
    });

    //get corn yield
    let cornYield = '';
    arrayCorn.forEach((item) => {
        cornYield = item.crop.yield;
    });

    cornTotal = cornAmount * cornYield; //get the productivity of corn


    let pumpkinTotal = '';
    const arrayPumkin = arrayItems[0].filter(item => item.crop.name === 'pumpkin');

    //get pumkin amount 
    let pumpkinAmount = '';
    arrayPumkin.forEach((item) => {
        pumpkinAmount = item.numCrops;
    });

    //get pumkin yield
    let pumpkinYield = '';
    arrayPumkin.forEach((item) => {
        pumpkinYield = item.crop.yield;
    });

    pumpkinTotal = pumpkinAmount * pumpkinYield; //get the productivity of pumking

    const totalYield = cornTotal + pumpkinTotal; //Total productivity
    console.log("total yield is:", totalYield)
    return totalYield;

}
//getTotalYield({ crops });


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};