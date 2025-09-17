// alert("david you did it");
let percentage = 0.15;
let billAmount = document.querySelector("#billAmount");
let labelValue;
let label = document.querySelector("#label");
let tipLabel = document.querySelector("#tipLabel");
let totalWord = document.querySelector("#totalWord");
let totalLabel = document.querySelector("#totalLabel");
let btn = document.querySelector("#btn");
let slider = document.querySelector("#sliderInput");
let sliderAudio = document.querySelector("#sliderAudio");
let btnAudio = document.querySelector("#btnAudio");
let numbersOnlyAudio = document.querySelector("#numbersOnlyAudio");

slider.addEventListener("change", () => {
  sliderAudio.play();
  switch (Number(slider.value)) {
    case 10:
      percentage = 0.1;
      labelValue = "10 Percent Tip";
      break;
    case 11:
      percentage = 0.11;
      labelValue = "11 Percent Tip";
      break;
    case 12:
      percentage = 0.12;
      labelValue = "12 Percent Tip";
      break;
    case 13:
      percentage = 0.13;
      labelValue = "13 Percent Tip";
      break;
    case 14:
      percentage = 0.14;
      labelValue = "14 Percent Tip";
      break;
    case 15:
      percentage = 0.15;
      labelValue = "15 Percent Tip";
      break;
    case 16:
      percentage = 0.16;
      labelValue = "16 Percent Tip";
      break;
    case 17:
      percentage = 0.17;
      labelValue = "17 Percent Tip";
      break;
    case 18:
      percentage = 0.18;
      labelValue = "18 Percent Tip";
      break;
    case 19:
      percentage = 0.19;
      labelValue = "19 Percent Tip";
      break;
    case 20:
      percentage = 0.2;
      labelValue = "20 Percent Tip";
      break;
    case 21:
      percentage = 0.21;
      labelValue = "21 Percent Tip";
      break;
    case 22:
      percentage = 0.22;
      labelValue = "22 Percent Tip";
      break;
    case 23:
      percentage = 0.23;
      labelValue = "23 Percent Tip";
      break;
    default:
      console.log("Invalid Entry");
      labelValue = "Invalid Entry";
  }
  label.textContent = labelValue;
  tipAmount();
});

function tipAmount() {
  if (isNaN(Number(billAmount.value))) {
    tipLabel.textContent = `Please enter numbers only`;
    totalLabel.textContent = "";
    return;
  }
  let tip = Number(billAmount.value) * percentage;
  tipLabel.textContent = `The Tip is $${tip.toFixed(2)}`;
  console.log(totalLabel);
  totalWord.textContent="Total is..."
  totalLabel.textContent = `$${(tip + Number(billAmount.value)).toFixed(
    2
  )}`;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  btnAudio.play();
  tipAmount();
});
