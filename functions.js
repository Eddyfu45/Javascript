const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

function addNumbers(numbersArray){
    let totalNum = 0;
    for (let i = 0; i < numbersArray.length; i++){
        totalNum = totalNum + numbersArray[i]; // totalNum += numbersArray[i]
    }
    return totalNum;
}

console.log(addNumbers(numbers));


const romeObject = {
    name: "Rome",
    location: "LA",
    team: "Lakers"
}

const otherObject = {
    name: "Rome",
    location: "LA"
}

function teamName(object) {
    return object.team;
}

let result = teamName(romeObject);
console.log(result);

let resultTwo = teamName(otherObject);
console.log(resultTwo);