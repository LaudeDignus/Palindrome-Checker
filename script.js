const btnCheckerPalindrome = document.getElementById("btn-checker");
const originalWord = document.getElementById("word");
const showResult = document.getElementById("result");
const showRule = document.getElementById("show-rule");
const hideRule = document.getElementById("hide-rule");
const ruleSection = document.getElementById("rule");
const checkerSection = document.getElementById("checker");

showRule.addEventListener("click", (e) => {
  ruleSection.style.display = "block";
  checkerSection.style.display = "none";
});

hideRule.addEventListener("click", (e) => {
  ruleSection.style.display = "none";
  checkerSection.style.display = "flex";
});

const palindromeChecker = (input) => {
  if (input === "") {
    alert("Please input word");
    return;
  }

  const regex = /[^a-z0-9]/gi;

  const originalWord = input.toLowerCase().replace(regex, "");
  const reversedWord = [...originalWord].reverse().join("");

    showResult.innerHTML = `<p id="palindrome-text"><span id="spanWord">${input}</span> is ${
      reversedWord === originalWord ? "" : "not"
    } a palindrome</p>`;

    showResult.style.display="flex"
  console.log(reversedWord);
};

btnCheckerPalindrome.addEventListener("click", () => {
  palindromeChecker(originalWord.value);
});
