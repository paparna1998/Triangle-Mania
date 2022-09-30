const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

const calculateArea = () => {
  const area = Math.trunc(Number(sides[0].value * sides[1].value) / 2);
  if (area < 0) {
    output.innerText = "Entered values cannot be negative";
  } else {
    output.innerText = "Area is : " + area + " (Truncated value)";
  }
};
areaBtn.addEventListener("click", calculateArea);
