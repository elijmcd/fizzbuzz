//take user input and print numbers to the page
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
        // let's fizz and buzz here
        if (i % fizzNum == 0 && i % buzzNum == 0) {
            numbers.push("!fZZbZZ!");
        } else if (i % fizzNum == 0) {
            numbers.push("Fzz");
        } else if (i % buzzNum == 0) {
            numbers.push("Bzz");
        } else {
            numbers.push(i)
        }
    }
    return numbers;
}



//display the nums on the page

function displayData(numbers) {
    const rowTemplate = document.getElementById("dataTemplate");
    const resultBody = document.getElementById("resultBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //ImportNode does same as clone, but import can get into a different doco than the one its on

    //clear the table
    resultBody.innerHTML = "";

    //loop over every element in the array 'numbers'
    //get the value and write it to the page
    //first 'for' loops over rows
    for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);

        //returns an array of cols from the template
        let cols = dataRow.querySelectorAll("td");

        //inner 'for' loops over cols
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[rowIndex + colIndex];
            // if (typeof value === "undefined") {
            //     value = "";
            // } else if (value % 2 == 0) {
            //     cols[colIndex].classList.add("boldIt")
            // }
            //NOTE: td's use 'textContent' to set their content
            cols[colIndex].textContent = value;
        }
        //adds the row to the page
        resultBody.appendChild(dataRow);
    }

}