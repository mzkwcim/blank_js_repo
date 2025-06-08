function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)){
        let result = operations(num1, num2);

        displaResult(result);    
    } else {
        displayResult('Please enter valid numbers');
    }
}

function operations(num1, num2){
    let operations = [];
    operations.push(multipy(num1, num2));
    operations.push(divide(num1, num2));
    operations.push(subtract(num1, num2));
    operations.push(add(num1, num2));
}

function multipy(a, b){
    debugger;

    return a * b;
}
function add(a, b){
    debugger;

    return a + b;
}
function subtract(a, b){
    debugger;

    return a - b;
}
function divide(a, b){
    debugger;

    return a / b;
}

function displayResult(result) { // Poprawiona literówka
    const resultElement = document.getElementById('result');

    if (Array.isArray(result)) { 
        let output = "Wyniki operacji:\n";
        output += `Mnożenie: ${result[0]}\n`;
        output += `Dzielenie: ${result[1]}\n`;
        output += `Odejmowanie: ${result[2]}\n`;
        output += `Dodawanie: ${result[3]}\n`;
        resultElement.textContent = output;
    } else { // Jeśli to komunikat o błędzie (ciąg znaków)
        resultElement.textContent = result;
    }
}