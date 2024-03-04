function convertTemperature() {
    let celsiusInput = document.getElementById("celsius").value;
    let fahrenheitInput = document.getElementById("fahrenheit").value;
    let kelvinInput = document.getElementById("kelvin").value;

    if (celsiusInput !== "") {
        let celsius = parseFloat(celsiusInput);
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.15;
        
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else if (fahrenheitInput !== "") {
        let fahrenheit = parseFloat(fahrenheitInput);
        let celsius = (fahrenheit - 32) * 5/9;
        let kelvin = (fahrenheit - 32) * 5/9 + 273.15;

        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else if (kelvinInput !== "") {
        let kelvin = parseFloat(kelvinInput);
        let celsius = kelvin - 273.15;
        let fahrenheit = (kelvin - 273.15) * 9/5 + 32;

        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    }
}

function clearFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
}
