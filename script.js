
    let result = document.getElementById('result');
    let input = '';

    document.addEventListener('keydown', function(event) {
        if (event.key >= '0' && event.key <= '9') {
            appendToResult(event.key);
        } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
            performOperation(event.key);
        } else if (event.key === '.' || event.key === '=') {
            appendToResult(event.key);
        } else {
            alert("Only numbers are allowed");
        }
    });

    function appendToResult(value) {
        input += value;
        result.innerText = input;
    }

    function performOperation(operation) {
        input += ' ' + operation + ' ';
        result.innerText = input;
    }

    function calculate() {
        try {
            input = eval(input);
            result.innerText = input;
        } catch (error) {
            alert('Invalid expression');
            clearResult();
        }
    }

    function clearResult() {
        input = '';
        result.innerText = '0';
    }
