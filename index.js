const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const funct = () => {
    return batteryBatches.reduce((accum, elem) => {
        return accum + elem
    }, 0)
}
const totalBatteries = funct()
// console.log(totalBatteries)