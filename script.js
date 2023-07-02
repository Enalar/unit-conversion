// const root = document.querySelector(":root")

// root.style.setProperty("--red", "blue")
const switchMode = document.getElementById("switch-mode")
const root = document.querySelector(":root")
const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

//     --body-bg: #1C1C1C;
//     --card-bg: #1F2937;
//     --units-bg: #273549;
//     --sub-title: #CCC1FF;
//     --normal-text: #fff;

switchMode.addEventListener("click", function() {
    if (switchMode.checked === true) {
        root.style.setProperty("--body-bg", "hsl(0, 0%, 85%)")
        root.style.setProperty("--card-bg", "#F4F4F4")
        root.style.setProperty("--units-bg", "#fff")
        root.style.setProperty("--sub-title", "#5A537B")
        root.style.setProperty("--normal-text", "#353535")
    } else if (switchMode.checked === false) {
        root.style.setProperty("--body-bg", "#1C1C1C")
        root.style.setProperty("--card-bg", "#1F2937")
        root.style.setProperty("--units-bg", "#273549")
        root.style.setProperty("--sub-title", "#CCC1FF")
        root.style.setProperty("--normal-text", "#fff")
    }
})

function convert() {
    feetValue = meterToFeet(userInput.value)
    meterValue = feetToMeter(userInput.value)
    lengthP.textContent = formatParagraph(userInput.value, "feet", feetValue, "meters", meterValue)
    gallonValue = literToGallon(userInput.value)
    literValue = gallonToLiter(userInput.value)
    volumeP.textContent = formatParagraph(userInput.value, "gallons", gallonValue, "liters", literValue)
    poundValue = kilogramToPound(userInput.value)
    kiloValue = poundToKilogram(userInput.value)
    massP.textContent = formatParagraph(userInput.value, "pounds", poundValue, "kilos", kiloValue)
}

convert()

convertBtn.addEventListener("click", convert)

function formatParagraph(userInput, imerialUnits, imerialValue, metricUnit , metricValue) {
    if (userInput) {
        return `${userInput} ${metricUnit} = ${imerialValue} ${imerialUnits} | ${userInput} ${imerialUnits} = ${metricValue} ${metricUnit}`
    } else {
        return `0 ${metricUnit} = ${imerialValue} ${imerialUnits} | 0 ${imerialUnits} = ${metricValue} ${metricUnit}`
    }
}

function feetToMeter(num) {
    return (num / 3.281).toFixed(3)
}

function meterToFeet(num) {
    return (num * 3.281).toFixed(3)
}

function gallonToLiter(num) {
    return (num / 0.264).toFixed(3)
}

function literToGallon(num) {
    return (num * 0.264).toFixed(3)
}

function poundToKilogram(num) {
    return (num / 2.204).toFixed(3)
}

function kilogramToPound(num) {
    return (num * 2.204).toFixed(3)
}