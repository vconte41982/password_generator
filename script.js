const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const specialcharactersEl = document.getElementById("specialcharacters");
const generateEl = document.getElementById("generate");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumbers,
  SpecialCharacters: getRandomSpecialCharacters,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSpecialCharacters = specialcharactersEl.checked;

  passwordEl.innerText = YourSecurePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSpecialCharacters,
    length
  );
});
function generatePassword(lower, upper, numbers, specialcharacters, length) {
  let password = "";

  const typesCount = lower + upper + numbers + specialcharacters;
  console.log("typesCount:", typesCount);

  const typesArr = [
    { lower },
    { upper },
    { numbers },
    { specialcharacters },
  ].filter((item) => Object.values(item)[0]);

  console.log("typesArray:", typesArr);
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      //console.log("funcName:", funcName);

      password += randomFunc[funcName]();
    });
  }
  const finalPassword = password.slice(0, length);
  return finalPassword;
}

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");
//passwordText.value = password;
//}

//-//https://net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecialCharacters() {
  const SpecialCharacters = "!@#$%*&(){}[]=<>^?,.";
  return SpecialCharacters[
    Math.floor(Math.random() * SpecialCharacters.length)
  ];
}
