// Step-1: add evendt listener to the deposite button .
 document.getElementById("btn-deposit").addEventListener("click", function(){
// Step-2: get the deposite ammount from the deposit input field
// for input field .value to the value inside the input field 
const depositField = document.getElementById("deposit-field");
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString)




// Step-3: get the current deposit total
// for non-input (element other than input textarea) use innerText to get the text
const depositTotalElement = document.getElementById("deposit-total");
const previousDepositTotalString = depositTotalElement.innerText; 
const previousDeposistTotal = parseFloat(previousDepositTotalString);

// Step-4: add numbers to set the total deposit 

const currentDepositTotal = previousDeposistTotal + newDepositAmount;
// Set the deposit total 
depositTotalElement.innerText = currentDepositTotal;

// Step-5: get balence current total 

const balenceTotalElement = document.getElementById("balence-total")
const previousBalenceTotalString = balenceTotalElement.innerText;
const previousBalenceTota = parseFloat(previousBalenceTotalString)

// Step-6: calculate current total balence 

const currentBalenceTotal = previousBalenceTota + newDepositAmount;
// Set the balence total 
balenceTotalElement.innerText = currentBalenceTotal;
// Step-7: clear the deposit field 
depositField.value = "";
})