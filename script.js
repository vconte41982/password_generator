// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");
//passwordText.value = password;
//}

//-//https://net-comber.com/charset.html

const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateBtnEl = document.getElementById('generateBtn')
const passwordEl = document.getElementById('password')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}
generateBtnEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasnNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasnNumber, hasSymbols, length);
})
function generatePassword(lower, upper, number, symbol, length) {

  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
      item => Object.values(item)[0]
    );


  if (typesCount === 0) {
    return '';
  }


  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%*&(){}[]=<>^?/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


