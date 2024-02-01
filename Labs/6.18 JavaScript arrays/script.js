// Put your solution here
function divideArray(numbers) {
    let sortedNumbers = numbers.sort(function (a, b) {
        return a - b;
    });
    let evenNums = [];
    let oddNums = [];

    sortedNumbers.forEach((num) => {
        if (num % 2 === 0) {
            evenNums.push(num);
        } else {
            oddNums.push(num);
        }
    });

    console.log("Even numbers:\n" + printArray(evenNums)
        + "\nOdd numbers:\n" + printArray(oddNums));
}

function printArray(array) {
    let output = "";
    if (array.length === 0) {
        output = output.concat("None");
    } else {
        array.forEach((element) => {
            output = output.concat(element + "\n");
        });
        output = output.slice(0, -1); // removes last \n
    }
    return output;
}

/*window.onload = function (event) {
    divideArray([4, 2, 9,15,30, 1, 8]);
}*/