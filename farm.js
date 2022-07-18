const corn = {
    name: "corn",
    yield: 30,
};

const getYieldForPlant = (items) => {
    [items].forEach((item) => {
        console.log(item.yield)
    });
}
getYieldForPlant(corn);
// module.exports = {
//     getYieldForPlant
    //     //getYieldForCrop,
    //     //getTotalYield
// };