window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // TODO: Complete the function
    let cInput = document.querySelector("#cInput");
    let fInput = document.querySelector("#fInput");
    let weatherImage = document.getElementById("weatherImage");
    let errorMessage = document.getElementById("errorMessage");
    const imageNames = ["cold", "cool", "warm"];

    document.querySelector("#convertButton").addEventListener("click", function () {
        if (cInput.value !== "") {
            fInput.value = convertCtoF(parseFloat(cInput.value));
            errorMessage.innerText = '';
        } else if (fInput.value !== "") {
            cInput.value = convertFtoC(parseFloat(fInput.value));
            errorMessage.innerText = '';
        }

        // this is my messiest code yet

        if(cInput.value === "NaN" || fInput.value === "NaN"){
            if(cInput.value === "NaN"){
                errorMessage.innerText = fInput.value + " is not a number";
                cInput.value = "";
            }else if(fInput.value === "NaN"){
                errorMessage.innerText = cInput.value + " is not a number";
                fInput.value = "";
            }
        }

        if (fInput.value < 32) {
            weatherImage.setAttribute("src", imageNames[0] + ".png");
        } else if (fInput.value <= 50) {
            weatherImage.setAttribute("src", imageNames[1] + ".png");
        } else {
            weatherImage.setAttribute("src", imageNames[2] + ".png");
        }
    })

    cInput.addEventListener("input", function () {
        fInput.value = "";
    });

    fInput.addEventListener("input", function () {
        cInput.value = "";
    });

}

function convertCtoF(degreesCelsius) {
    // TODO: Complete the function
    return degreesCelsius * (9 / 5) + 32;
}

function convertFtoC(degreesFahrenheit) {
    // TODO: Complete the function
    return (degreesFahrenheit - 32) * (5 / 9);
}
