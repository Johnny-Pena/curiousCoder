const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
let isPalindrome;

function palindromeChecker (str) {
    let strLower = str.toLowerCase(); //convert string to lower case. Use this for the palindrome function.
    let firstCharUpper = strLower.charAt(0).toUpperCase() + strLower.slice(1) //Add an uppercase 1st character and lowercase the rest of the string. Use this for the result.
    let strArr = [];
    let reversedStrArr = [];
  
    //Convert string to array.
    for(let i = 0; i < strLower.length; i++) {
      strArr.push(strLower[i]);
    } 
  
    //Reverse the array.
    for (let i = strArr.length-1; i >= 0; i--) {
      reversedStrArr.push(strArr[i]);
    }
  
    //Check if the arrays are a palindrome
    for(let i = 0; i < strArr.length/2; i++) {
      if (strArr[i] !== reversedStrArr[i]) {
        isPalindrome = false;
        return firstCharUpper + " is NOT a palindrome.";
      }
      }
    isPalindrome = true;
    return firstCharUpper + " is a palindrome.";
  }

  function checkButtonMagic (event) {
    event.preventDefault();
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');

    if (textInput.value === "") {
      resultDiv.innerText = "Please enter text into the text box.";
    } else {
      const result = palindromeChecker(textInput.value);
      holdResult = result;
      resultDiv.innerText = result;
      resultDiv.style.color = isPalindrome ? "green":"red";
    }
  }

checkBtn.addEventListener(`click`, checkButtonMagic)
