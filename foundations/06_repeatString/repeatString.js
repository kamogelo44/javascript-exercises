let stringInput = "hey"
let numInput = 3
let greet = []
const repeatString = function(stringInput, numInput) {
    if (numInput>0) {
        for (i=0; i<=numInput; i++) {
            greet.push(stringInput[i])
        }
    } else {
        console.log(error)
    }
};

console.log(greet)
// Do not edit below this line
module.exports = repeatString;
