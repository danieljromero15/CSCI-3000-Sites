function parseScores(scoresString) {
    // TODO: Compete the function
    try {
        if (scoresString.length !== 0) {
            return scoresString.split(" ");
        }
    } catch (TypeError) {
        console.log("Input is empty, replacing with empty array")
    }
    return [];
}

function buildDistributionArray(scoresArray) {
    // TODO: Compete the function
    const gradeDistributionArray = [0, 0, 0, 0, 0]; // This might not be the right way to make an array of length 5, but I just did a bunch of C and arrays are hard there
    if (scoresArray.length) {
        scoresArray.forEach(function (score) {
            if (score >= 90) {
                gradeDistributionArray[0]++;
            } else if (score >= 80) {
                gradeDistributionArray[1]++;
            } else if (score >= 70) {
                gradeDistributionArray[2]++;
            } else if (score >= 60) {
                gradeDistributionArray[3]++;
            } else {
                gradeDistributionArray[4]++;
            }
        })
    }

    return gradeDistributionArray;
}

function setTableContent(userInput) {
    // TODO: Compete the function
    let gradeArray = buildDistributionArray((parseScores(userInput)));
    let bar = document.getElementById("firstRow");
    let gradeNumOfTimes = document.getElementById("thirdRow");

    for (let i = 0; i < gradeArray.length; i++) { //not sure if this is less efficient than writing it out one at a time, but it works pretty well
        bar.insertAdjacentHTML('beforeend', "<td><div style='height:" + (gradeArray[i] * 10) + "px' class='bar" + i + "'></div></td>"); //insertAdjacent appends rather than the replacement of innerHTML
        gradeNumOfTimes.insertAdjacentHTML('beforeend', "<td>" + gradeArray[i] + "</td>");
    }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");