function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)){
        let result = multipy(num1, num2);

        displaResult(result);    
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multipy(a, b){
    debugger;

    return a * b;
}

function displaResult(result){
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}