
function runExercise1() {
    const result = document.getElementById('result1');
    let currentTime = new Date();
    currentTime = `Time is: ${currentTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    })}`;
    result.innerHTML = currentTime;
}

function runExercise2() {
    window.print()
}

function runExercise3() {
    const result = document.getElementById('result3');
    const currentTime = new Date();
    const date = currentTime.getDate().toString().padStart(2, '0');
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    const year = currentTime.getFullYear();

    const mdyFormat = `${month}/${date}/${year}`;
    const mdyElement = document.createElement('p');
    mdyElement.innerHTML = mdyFormat;
    result.appendChild(mdyElement);
    const mdySlashFormat = `${month}-${date}-${year}`;
    const mdySlashElement = document.createElement('p');
    mdySlashElement.innerHTML = mdySlashFormat;
    result.appendChild(mdySlashElement);
    const dmyFormat = `${date}/${month}/${year}`;
    const dmyElement = document.createElement('p');
    dmyElement.innerHTML = dmyFormat;
    result.appendChild(dmyElement);
    const dmySlashFormat = `${date}-${month}-${year}`;
    const dmySlashElement = document.createElement('p');
    dmySlashElement.innerHTML = dmySlashFormat;
    result.appendChild(dmySlashElement);
    
}

function runExercise4() {
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;

    const semiPerimeter = (side1 + side2 + side3) / 2;

    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)).toFixed(2);
    const result = document.getElementById('result4');
    result.innerHTML = `Area of the triangle is: ${area}`;

}

function runExercise5() {
    const result = document.getElementById('result5');
    const word = 'JavaScript ';
    const spanElement = document.createElement('span');
    spanElement.innerHTML = word;
    result.appendChild(spanElement);

    let textNode = spanElement.childNodes[0];
    console.log(textNode);
    let text = textNode.data;
    console.log(text);

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 200);    
    
}

function runExercise6() {
    const result = document.getElementById('result6');
    
    const startYear = 2014;
    const endYear = 2050;
    const years = [];

    for( let year = startYear; year < endYear; year++) {
        const date = new Date(year, 0, 1);
        const day = date.getDay();
        const isSunday = day === 0;
        if(isSunday) {
            years.push(year);
        }
    }

    years.forEach(year => {
        const yearElement = document.createElement('span');
        yearElement.innerHTML = `${year}, `;
        result.appendChild(yearElement);
    });

}

function runExercise7() {
    const result = document.getElementById('result7');
    const input = prompt('Please enter a number between 1 and 10');
    const number = parseInt(input);
    const guessedNumber = Math.random() * 10;
    const message = number === guessedNumber ? 'Good Work' : 'Not matched';
    result.innerHTML = message;
}

function runExercise8() {
    const result = document.getElementById('result8');
    const url = location.href;
    const urlElement = document.createElement('p');
    urlElement.innerHTML = `Current URL is: ${url}`;
    result.appendChild(urlElement);
}

function runExercise9() {
    const result = document.getElementById('result9');
    const variableName = prompt('Please enter a variable name');
    const variableValue = prompt('Please enter a variable value');
    const variable = {};
    variable[variableName] = variableValue;
    const variableElement = document.createElement('p');
    variableElement.innerHTML = `Variable name: ${variableName}, Variable value: ${variableValue}`;
    result.appendChild(variableElement);
}
