// const corn = {
//     name: "corn",
//     yield: 30,
// };

const getYieldForPlant = (items) => {
    [items].forEach((item) => {
        itemYield = item.yield;
        console.log("itemYield value:", itemYield);
    });
    return itemYield;
}

module.exports = getYieldForPlant;
// module.exports = {
//     getYieldForPlant,
//     getYieldForCrop,
//     getTotalYield
// };