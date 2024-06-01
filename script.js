function convertTemp() {
    const inputTemp = document.getElementById('inputTemp').value;
    const scale = document.getElementById('scale').value;
    let result;

    if (scale === "Celsius") {
        result = (inputTemp * 9/5) + 32;
        document.getElementById('result').innerHTML = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (inputTemp - 32) * 5/9;
        document.getElementById('result').innerHTML = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    }
}
