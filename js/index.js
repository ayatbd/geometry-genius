let count = 0;
document.getElementById('triangle-button').addEventListener('click', function(){
    const firstInput = document.getElementById('input-b').value;
    const firstInputNumber = parseFloat(firstInput);

    const secondInput = document.getElementById('input-h').value;
    const secondInputNumber = parseFloat(secondInput);

    const tringleArea = 0.5 * firstInputNumber * secondInputNumber;

    // listing the area of calculated values 
    count++
    const containerTable = document.getElementById('container-table');

    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${count}</td>
    <td>${tringleArea}</td>
    <td>${tringleArea}</td>
    <td>${firstInput}</td>
    `;
    containerTable.appendChild(tr);

})