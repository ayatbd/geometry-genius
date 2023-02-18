let count = 0;

// triangle area calculation
document
  .getElementById("triangle-button")
  .addEventListener("click", function () {
    // get value of input fields by function 2
    const firstInputNumber = getFirstInputValueById("trianle-input-b");
    const secondInputNumber = getSecondInputValueById("trianle-input-h");

    const alert = document.getElementById('alert');
    if(isNaN(firstInputNumber) || isNaN(secondInputNumber)){
        alert.style.display = 'block';
    }
    else{
        alert.style.display = 'none';
    }

    const tringleArea = 0.5 * firstInputNumber * secondInputNumber + 'cm<sup>2</sup>';

    const triangleShape = document.getElementById("triangle-area-name").innerText;

    listingValues(triangleShape, tringleArea);
  });

// rectangle area calculate
document.getElementById("rectangle").addEventListener("click", function () {
  // get value of input fields by function 2
  const firstInputNumber = getFirstInputValueById("rectangle-input-w");
  const secondInputNumber = getSecondInputValueById("rectangle-input-l");

  const alert = document.getElementById('rectangle-alert');
    if(isNaN(firstInputNumber) || isNaN(secondInputNumber)){
        alert.style.display = 'block';
    }
    else{
        alert.style.display = 'none';
    }

  const rectnagleArea = firstInputNumber * secondInputNumber + 'cm<sup>2</sup>';

  const rectangleShape = document.getElementById("rectangle-area-name").innerText;

  listingValues(rectangleShape, rectnagleArea);
});

// Parallelogram area calculate
document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    // get value of input fields by function 2
    const firstInputNumber = getFirstInputValueById("Parallelogram-input-b");
    const secondInputNumber = getSecondInputValueById("Parallelogram-input-h");

    const ParallelogramArea = firstInputNumber * secondInputNumber;
    const ParallelogramShape = document.getElementById("parallelogram-area-name").innerText;

    // get list items by function no.1
    listingValues(ParallelogramShape, ParallelogramArea);
  });

// rhombus area calculate
document
  .getElementById("Rhombus-btn")
  .addEventListener("click", function () {
    // get value of input fields by function 2
    const firstInputNumber = getFirstInputValueById("Rhombus-input-w");
    const secondInputNumber = getSecondInputValueById("Rhombus-input-l");

    const RhombusArea = 0.5 * firstInputNumber * secondInputNumber;
    const RhombusShape = document.getElementById("rhombus-area-name").innerText;

    // get list items by function no.1
    listingValues(RhombusShape, RhombusArea);
  });

// Pentagon area calculate
document
  .getElementById("Pentagon-btn")
  .addEventListener("click", function () {
    // get value of input fields by function 2
    const firstInputNumber = getFirstInputValueById("Pentagon-input-p");
    const secondInputNumber = getSecondInputValueById("Pentagon-input-b");

    const RhombusArea = 0.5 * firstInputNumber * secondInputNumber;
    const RhombusShape = document.getElementById("pentagon-area-name").innerText;

    // get list items by function no.1
    listingValues(RhombusShape, RhombusArea);
  });

// Pentagon area calculate
document
  .getElementById("ellipse-btn")
  .addEventListener("click", function () {
    // get value of input fields by function 2
    const firstInputNumber = getFirstInputValueById("ellipse-input-a");
    const secondInputNumber = getSecondInputValueById("ellipse-input-b");

    const RhombusArea = 3.14 * firstInputNumber * secondInputNumber;
    const RhombusShape = document.getElementById("ellipse-area-name").innerText;

    // get list items by function no.1
    listingValues(RhombusShape, RhombusArea);
  });
