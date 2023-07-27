function convert() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const val = parseFloat(document.getElementById('val').value);

    let result;
    let resultUnit;

    if (from === to) {
        result = val;
        resultUnit = from;
    } 
    else if (from === 'celsius' && to === 'fahrenheit') {
        result = (val * 9/5) + 32;
        resultUnit = to;
    } 
    else if (from === 'celsius' && to === 'kelvin') {
        result = val + 273.15;
        resultUnit = to;
    } 
    else if (from === 'fahrenheit' && to === 'celsius') {
        result = (val - 32) * 5/9;
        resultUnit = to;
    } 
    else if (from === 'fahrenheit' && to === 'kelvin') {
        result = (val - 32) * 5/9 + 273.15;
        resultUnit = to;
    } 
    else if (from === 'kelvin' && to === 'celsius') {
        result = val - 273.15;
        resultUnit = to;
    } 
    else if (from === 'kelvin' && to === 'fahrenheit') {
        result = (val - 273.15) * 9/5 + 32;
        resultUnit = to;
    }

    const output = document.getElementById('result');
    output.innerHTML = `${result.toFixed(2)} ${resultUnit}`;
}
