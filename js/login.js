// Step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){
   // Step-2: get the email address inside the email input faild
   // alwyes remember to use .value to get text from an input faild 
   const emaileField = document.getElementById("user-email");
   const email = emaileField.value;
   // Step-3 get passwerd
   //3.a: set id on the html element
   //3.b: get the element 
   //3.c: get the value from the element
   const passwerdField = document.getElementById("user-passwerd")
   const passwerd = passwerdField.value;
   console.log(email, passwerd); 
   //Damger: Do not the verify email password on the client side 
   // Step-4: verify email passwerd  and check whether valid user or not 
   if(email === "mahedihasan@gmail.com" && passwerd === "mahedi") {
      console.log("valid user")
      window.location.href = "bank.html"
   }
   else{
      alert("passwerd vulsot knn sala!!");
   }
})