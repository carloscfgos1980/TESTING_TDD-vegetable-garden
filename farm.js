const corn = {
    name: "corn",
    yield: 30,
};

const getYieldForPlant = (items) => {
    const products = [items]
        .forEach((item) => {
            console.log(item.yield)
        });
}

getYieldForPlant(corn);
// module.exports = {
//     getYieldForPlant
    //     //getYieldForCrop,
    //     //getTotalYield
//};