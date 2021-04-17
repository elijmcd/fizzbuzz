//take user's input and prepare the results
function printNumbers() {
    let fizz = parseInt(document.getElementById("numFizz").value);
    let buzz = parseInt(document.getElementById("numBuzz").value);

    // declare variable 'fb' to store output 
    let fb = fizzBuzz(fizz, buzz);
    displayData(fb);
}

function fizzBuzz(fizzNum, buzzNum) {

    let numbers = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzNum == 0 && i % buzzNum == 0) {
            if (i == 77) {
                numbers.push("!!F!ZZB!ZZ!!");
                continue;
            }
            numbers.push("!fiZZbuZZ!");
        } else if (i % fizzNum == 0) {
            numbers.push("Fizz");
        } else if (i % buzzNum == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(i)
        }
    }
    return numbers;
}

//display the numbers on the modal
function displayData(numbers) {
    const rowTemplate = document.getElementById("dataTemplate");
    const resultBody = document.getElementById("resultBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;

    //clear the table
    resultBody.innerHTML = "";

    //outer 'for' loop runs over rows, returning cols to the template
    for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        let cols = dataRow.querySelectorAll("td");

        //inner 'for' loop runs over cols
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[rowIndex + colIndex];
            //NOTE: td's use 'textContent' to set their content
            cols[colIndex].textContent = value;
        }
        //adds the row to the page
        resultBody.appendChild(dataRow);
    }
}