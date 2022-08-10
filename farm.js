const getYieldForPlant = (plant) => {
    console.log("yield for plant", plant)
    const plantYield = plant.yield
    console.log("Yield of the plant is:", plantYield)
    return plantYield
}
//getYieldForPlant(corn);

const getYieldForCrop = (item) => {
    plant = item.crop
    //console.log("Object plant is:", plant)

    plantYield = getYieldForPlant(plant)
    //console.log("Yield for plant is:", plantYield)

    const cropNums = item.numCrops
    //console.log("The amount of plants is:", cropNums)

    yieldCrop = plantYield * cropNums
    console.log("Yield for the crop is:", yieldCrop)

    return yieldCrop;
}
//getYieldForCrop(input);

const getTotalYield = (items) => {
    //console.log("Items:", items.crops)
    const cropsYield = items.crops.map((elem) => {
        outcome = getYieldForCrop(elem)

        //console.log("Outcome Yield:", outcome)
        return outcome
    });
    totalYield = cropsYield.reduce((acc, cur) => acc + cur);

    console.log("Total Yield is", totalYield)
    return totalYield

}
//getTotalYield({ crops });


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};