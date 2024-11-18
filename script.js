// Part 1: Thinking Functionally

/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
}

function reverseString2(str) {
    return str.split("").reverse().join("");
}

function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("!dlroW olleH"))
// console.log(reverseString2("!dlroW olleH"))
// console.log(reverseString3("!dlroW olleH"))
// console.log(reverseString4("!dlroW olleH"))
// console.log(reverseString5("!dlroW olleH"))
/* 
The best choice is reverseString2. 
It is pretty straightforward, easy to read,
efficient, short and esy to understand
*/

let arrOfNum = [7, 3, 9, 21];

function returnSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(`The sum of the array of numbers are: ${returnSum(arrOfNum)}`);

// let arrOfStrings = ["Bobby", "Jonathan", "Matthew", "John", "Chris"];
let arrOfStrings = ["Bobby", "Jonathan", "Matthew", "John", "Chris", "Madeline"];

function longestString(string) {
    let longestStr = "";
    let strArr = [];
    for(let str of string) {
        if(str.length > longestStr.length) {
            longestStr = str;
        }
        else if(str.length === longestStr.length) {
            strArr.push(str, longestStr);
            longestStr = "";
        }
    }
    return strArr.length > 1 ? strArr : longestStr;
}
// console.log(`The longest string/s is/are: ${longestString(arrOfStrings)}`);

function returnStrGreaterThanNum(string, num) {
    let greaterThanNum = [];
    for(let str of string) {
        if(str.length > num) {
            greaterThanNum.push(str)
        }
    }
    return greaterThanNum.length > 0 
    ? greaterThanNum 
    : "No strings greater than the given number";
}
// console.log(returnStrGreaterThanNum(arrOfStrings, 7))

// Part 2: Thinking Methodically
let sampleArrOfObjs = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]
function sortByAge(array) {
    let ages = [];
    array.sort(arr => { ages.push(arr.age) });
    return ages
}
// console.log(`The ages of the people are: ${sortByAge(sampleArrOfObjs)}`);

function filterAge(array) {
    let underFifty = array.filter(fifty => {
        return fifty.age < 50
    })
    return underFifty
}
// console.log(filterAge(sampleArrOfObjs));

function mapArray(array) {
    array.map(person => {
        person.job = person.occupation;
        delete person.occupation
        person.age = parseInt(person.age) + 1;
    })
    return array
}
// console.log(mapArray(sampleArrOfObjs))