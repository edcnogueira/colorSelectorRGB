var inputRangeRed = document.querySelector('#inputRed');
var inputRangeGreen = document.querySelector('#inputGreen');
var inputRangeBlue = document.querySelector('#inputBlue');

var showRed = document.querySelector('#showRed');
var showGreen = document.querySelector('#showGreen');
var showBlue = document.querySelector('#showBlue');

function start() {
  inputRangeRed.addEventListener('input', handleRange(inputRangeRed, showRed));
  inputRangeGreen.addEventListener(
    'input',
    handleRange(inputRangeGreen, showGreen)
  );
  inputRangeBlue.addEventListener(
    'input',
    handleRange(inputRangeBlue, showBlue)
  );
  color();
}

function handleRange(input, show) {
  return function () {
    show.value = input.value;
    color();
  };
}

function color() {
  upColor = document.querySelector('#colorBox');
  upColor.style.border = `150px solid rgb(${showRed.value},${showGreen.value},${showBlue.value})`;
}

start();
