const inputAll = document.querySelectorAll('input');
const spanAll = document.querySelectorAll('span');

// Кнопки расчета и сброса полей
const button = document.querySelector('#sum');
const reset = document.querySelector('#reset');

// Поле вывода общей стоимости
const allPrice = document.querySelector('.all-price');

// Поле вывода  стоимости каждой услуги
const gasPrice = document.querySelector('.gas-price');
const electPrice = document.querySelector('.elect-price');
const watterPrice = document.querySelector('.watter-price');

// Функция расчета стоимости услуги
const monthlyPayment = function (lastMonth, currentMonth, Price) {
  const totalСost = (currentMonth - lastMonth) * Price;
  return totalСost;
};

// Обертка и поля ввода для стоимости газа
const gasWrapper = document.querySelector('.gas-wrapper');
const gasInputs = gasWrapper.querySelectorAll('input');

// Обертка и поля ввода для стоимости электричества
const electWrapper = document.querySelector('.elect-wrapper');
const electInputs = electWrapper.querySelectorAll('input');

// Обертка и поля ввода для стоимости водоснабжения
const watterWrapper = document.querySelector('.watter-wrapper');
const watterInputs = watterWrapper.querySelectorAll('input');

// функция расчета по клику на кнопку
button.addEventListener('click', function () {
  const gas = monthlyPayment(gasInputs[0].value, gasInputs[1].value, gasInputs[2].value);
  const elect = monthlyPayment(electInputs[0].value, electInputs[1].value, electInputs[2].value);
  const watter = monthlyPayment(watterInputs[0].value, watterInputs[1].value, watterInputs[2].value);

  gasPrice.textContent = `${gas} ₽`;
  watterPrice.textContent = `${watter} ₽`;
  electPrice.textContent = `${elect} ₽`;

  allPrice.textContent = `${gas + watter + elect} ₽`;
})

// Корявая функция сброса полей
reset.addEventListener('click', function () {
  inputAll.forEach((item) => item.value = '');
  spanAll.forEach((item) => item.textContent = '');
})