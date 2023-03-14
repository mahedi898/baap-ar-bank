/*
1. add  even handler with the withraw button
2. get the withdraw ammount from the withdraw input fild
2.5. also make sure to convart the input a number by using parseFloat
3. get previus withdraw total 
4. calculate total withdraw ammount 
4.5. set total withdraw ammount 
5. get the previous balence total
6. calculat new balence total 
6.5. set the new balence total 


7.clear the input fild
*/
// step-1 
document.getElementById("btn-withdraw").addEventListener("click", function() {
// step-2
const withdrawFild = document.getElementById("withdraw-fild");
const newWithdrawAmountString = withdrawFild.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString)
// Step-3
const withdrawTotalElement= document.getElementById("withdraw-total")
const PreviousWithdrawTotalString =  withdrawTotalElement.innerText;
const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalString);
// Step-4
const currentWithdrawTotal = PreviousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;
// Step-5
const balenceTotalElement = document.getElementById("balence-total")
const previousBalenceTotalString = balenceTotalElement.innerText;
const previousBalenceTota = parseFloat(previousBalenceTotalString);
// Step-6 
const newBalenceTotal = previousBalenceTota - newWithdrawAmount;
balenceTotalElement.innerText = newBalenceTotal;

// Step-7
withdrawFild.value = "";

})