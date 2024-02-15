// Function to perform temperature conversion from Celsius to Fahrenheit
function konversiSuhu() {
    var celciusInput = document.querySelector('.input-section input[type="number"]');
    var fahrenheitInput = document.querySelectorAll('.input-section input[type="number"]')[1];
    var celciusValue = parseFloat(celciusInput.value);
    var fahrenheitValue = (celciusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitValue;

    // Display the calculation formula
    var formula = "Rumus: Fahrenheit = (Celsius * 9/5) + 32";
    var caraKalkulasiInput = document.querySelector('.text-field');
    caraKalkulasiInput.value = formula;

    // Display the calculation formula below the <hr> tag
    var rumusDiv = document.createElement('div');
    rumusDiv.innerHTML = "<h3>Rumus Konversi dari Celcius ke Fahrenheit</h3><p>Suhu dalam Derajat Fahrenheit(℉) sama dengan suhu dalam Derajat Celcius(℃) dikali 9/5 ditambah 32</p><p>Suhu ℉ = (Suhu ℃ x 9/5) + 32</p>";
    var hrTag = document.querySelector('hr');
    hrTag.insertAdjacentElement('afterend', rumusDiv);
}

// Function to reset the input fields
function resetFields() {
    var inputFields = document.querySelectorAll('.input-section input[type="number"]');
    inputFields.forEach(function(input) {
        input.value = '';
    });

    // Reset the calculation formula
    var caraKalkulasiInput = document.querySelector('.text-field');
    caraKalkulasiInput.value = '';

    // Remove the calculation formula below the <hr> tag
    var rumusDiv = document.querySelector('hr + div');
    if (rumusDiv) {
        rumusDiv.remove();
    }
}
// Function to reverse the temperature conversion from Fahrenheit to Celsius
function reverseConversion() {
    var celciusInput = document.querySelectorAll('.input-section input[type="number"]')[1];
    var fahrenheitInput = document.querySelector('.input-section input[type="number"]');
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var celciusValue = (fahrenheitValue - 32) * 5/9;
    celciusInput.value = celciusValue;

    // Update the calculation formula
    var caraKalkulasiInput = document.querySelector('.text-field');
    caraKalkulasiInput.value = "Rumus: Celcius = (Fahrenheit - 32) * 5/9";

    // Update the calculation formula below the <hr> tag
    var rumusDiv = document.querySelector('hr + div');
    if (rumusDiv) {
        rumusDiv.innerHTML = "<h3>Rumus Konversi dari Fahrenheit ke Celcius</h3><p>Suhu dalam Derajat Celcius(℃) sama dengan suhu dalam Derajat Fahrenheit(℉) dikurangi 32, lalu dikali 5/9</p><p>Suhu ℃ = (Suhu ℉ - 32) * 5/9</p>";
    }
}
document.getElementById('konversi').addEventListener('click', konversiSuhu);
document.getElementById('reset').addEventListener('click', resetFields);
document.getElementById('reverse').addEventListener('click', reverseConversion);