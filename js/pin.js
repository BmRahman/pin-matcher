function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    
    if(pinString.length === 4) {
        return pin;
    }
    else {
       return getPin();
    }
}

document.getElementById('get-pin').addEventListener('click', function() {
    const pinField = document.getElementById('pin-view');
    const pinFinal = pinField.value;
    pinField.value = getPin();
    const success = document.getElementById('pin-success');
    const failed = document.getElementById('pin-failed');
    success.style.display = 'none';
    failed.style.display = 'none';
})

document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const inputField = document.getElementById('input-box');
    const oldInput = inputField.value;
    if(isNaN(number)) {
        if(number === 'C') {
            inputField.value = '';
        }
        else if (number === '<') {
            const digits = oldInput.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            inputField.value = remainingDigits;
        }
    }
    else {
        
        
        const newInput = oldInput + number;
        inputField.value = newInput;
    }
    
})

document.getElementById('submit').addEventListener('click', function() {
    const pinField = document.getElementById('pin-view');
    const pinFinal = pinField.value;

    const inputField = document.getElementById('input-box');
    const inputFinal = inputField.value;
    
    if(inputFinal === pinFinal) {
        const success = document.getElementById('pin-success');
        const failed = document.getElementById('pin-failed');
        success.style.display = 'block';
        failed.style.display = 'none';
    }
    else {
        const failed = document.getElementById('pin-failed');
        const success = document.getElementById('pin-success');
        failed.style.display = 'block';
        success.style.display = 'none';
    }
})