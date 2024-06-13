#! /usr/bin/env node
import inquirer from "inquirer";

let accountBalance = 50000;

let pinCode: number = 5678;

let answer = await inquirer.prompt({
  name: "firstQuestion",
  type: "number",
  message: "Enter your PIN CODE",
});
if (pinCode === answer.firstQuestion) {
  console.log("correct PIN CODE");
  let operatorChoices = await inquirer.prompt({
    name: "operator",
    type: "list",
    choices: ["withdraw", "check balance"],
    message: "Please select an option",
  });
  console.log(operatorChoices);
  if (operatorChoices.operator === "withdraw") {
    let userAmount = await inquirer.prompt([
      {
        name: "Amount",
        type: "number",
        message: "Enter your amount",
      },
    ]);
    if (userAmount.Amount > 50000) {
      console.log("Your Balance is insufficient");
    } else if (userAmount.Amount <= 50000) {
      accountBalance -= userAmount.Amount;
      console.log("Your remainig amount is: " + accountBalance);
    }
  }
} else {
  console.log("Incorrect...Enter correct PIN CODE");
}
