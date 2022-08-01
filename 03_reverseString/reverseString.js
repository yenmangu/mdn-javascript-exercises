// const reverseString = function(string) {
//     var string = "";

//     function toArray() {
//         var newArray = string.split(string);
//     }
//     return newArray;

//     function reverseArray() {
//         var reversed = newArray.reverse()
//     }
//     return reversed;
// };


const reverseString = function(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;