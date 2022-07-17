const corn = {
    name: "corn",
    yield: 30,
};

const price = corn.map((item) => {
    return item.name
})

console.log(price)

// const getYieldForPlant = (items) => {

//     items.map = ((item) => {
//         return item.name

//     });
// }

module.exports = {
    getYieldForPlant, getYieldForCrop, getTotalYield
};
