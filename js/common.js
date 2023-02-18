// common js codes

// function no. 1
function listingValues(ShapeName, shapeQuantity) {
  // listing the area of calculated values
  count++;
  const containerTable = document.getElementById("container-table");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count}</td>
    <td>${ShapeName}</td>
    <td>${shapeQuantity}</td>
    <td><button class="bg-sky-400 p-2 rounded">convert to m<sub>2</sub></button></td>
    `;
  containerTable.appendChild(tr);
}

// function no. 2
function getFirstInputValueById(firstInputId) {
  const firstInput = document.getElementById(firstInputId).value;
  const firstInputNumber = parseFloat(firstInput);
  return firstInputNumber;
}
function getSecondInputValueById(secondInputId) {
  const secondInput = document.getElementById(secondInputId).value;
  const secondInputNumber = parseFloat(secondInput);
  return secondInputNumber;
}