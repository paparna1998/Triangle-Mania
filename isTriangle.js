const button = document.querySelector("#btn-check");
const inputAngle = document.querySelectorAll(".input-angle");
const output = document.querySelector("#output");

const check = () => {
  const angle1 = Number(inputAngle[0].value);
  const angle2 = Number(inputAngle[1].value);
  const angle3 = Number(inputAngle[2].value);
  // console.log(Math.sign(angle1));
  if (angle1 < 0) {
    output.innerText = "Angle-1 cannot be negative";
  } else if (angle2 < 0) {
    output.innerText = "Angle-2 cannot be negative";
  } else if (angle3 < 0) {
    output.innerText = "Angle-3 cannot be negative";
  } else {
    const sum = angle1 + angle2 + angle3;

    if (sum === 180) {
      output.innerText = "Is triangle";
    } else {
      output.innerText = "Not a Triangle";
    }
  }
};

button.addEventListener("click", check);
