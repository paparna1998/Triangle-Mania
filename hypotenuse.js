const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

const calculateSumOfSquares = (a, b) => {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
};

const calculateHypotenuse = () => {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.trunc(Math.sqrt(sumOfSquares));
  output.innerText =
    "The length of hypotenuse is " + lengthOfHypotenuse + " (Truncated value)";
};

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
