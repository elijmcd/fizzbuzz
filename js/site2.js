function printNumbers() {
    let startNum = parseInt(document.getElementById("numOne").value);
    let endNum = parseInt(document.getElementById("numTwo").value);
    displayData(startNum, endNum);

}

function displayData(start, end) {
    const myTemplate = document.getElementById("dataTemplate");
    const resultBody = document.getElementById("resultBody");
    resultBody.innerHTML = "";


    let result = "";
    for (let i = start; i <= end; i += 5) {
        const dataRow = document.importNode(myTemplate.content, true);
        dataRow.getElementById("col1").textContent = i;
        dataRow.getElementById("col2").textContent = i + 1;
        dataRow.getElementById("col3").textContent = i + 2;
        dataRow.getElementById("col4").textContent = i + 3;
        dataRow.getElementById("col5").textContent = i + 4;
        dataRow.getElementById("col6").textContent = i + 5;
        dataRow.getElementById("col7").textContent = i + 6;
        dataRow.getElementById("col8").textContent = i + 7;
        dataRow.getElementById("col9").textContent = i + 8;
        dataRow.getElementById("col10").textContent = i + 9;
        resultBody.appendChild(dataRow);

    }
}