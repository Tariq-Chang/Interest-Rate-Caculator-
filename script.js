function compute() {
  let principalAmount = document.getElementById("principal").value;
  let years = document.querySelector("#years").value;
  let rateValue = document.querySelector("#rate").value;
  let interest = (principalAmount * years * rateValue) / 100;
  let result = document.querySelector("#result");

  let year = parseInt(years) + new Date().getFullYear();
  interest = parseInt(principalAmount) + parseFloat(interest);
  if (principalAmount <= 0) {
    window.alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit $" +
      "<mark>" +
      principalAmount +
      "</mark>" +
      ",<br>at an interest rate of " +
      "<mark>" +
      rateValue +
      "</mark>" +
      "%<br>You will receive an amount of $" +
      "<mark>" +
      interest +
      "</mark>" +
      ",<br>in the year " +
      "<mark>" +
      year +
      "</mark>";
    ("<br>");
  }
}

const updateRate = () => {
  let rateValue = document.querySelector("#rate").value;
  document.querySelector("#rate__value").innerText = rateValue + " %";
  return rateValue;
};
