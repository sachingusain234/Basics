document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display h2');

    function handleClick(event) {
        const buttonValue = event.target.textContent.trim();

        switch (buttonValue) {
            case 'AC':
                clearDisplay();
                break;
            case '=':
                evaluateExpression();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                appendToDisplay(` ${buttonValue} `); 
                break;
            case 'C': 
                deleteLastChar();
                break;
            case '^.5':
                calculateSquareRoot();
                break;
            default:
                appendToDisplay(buttonValue);
                break;
        }
    }
    function deleteLastChar() {
        let currentDisplay = display.textContent;
        display.textContent = currentDisplay.slice(0, -1);
    }

    function clearDisplay() {
        display.textContent = '';
    }
    function calculateSquareRoot() {
        const expression = display.textContent.trim();
        try {
            const result = Math.sqrt(eval(expression));
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Error';
        }
    }

    function evaluateExpression() {
        try {
            const result = eval(display.textContent);
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Error';
        }
    }

    function appendToDisplay(value) {
        display.textContent += value;
    }

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
});
