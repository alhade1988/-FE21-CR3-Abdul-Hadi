 function calculateInvoice(starter, maindish, dessert, beverage) {

     return starter + maindish + dessert + beverage;

 }
 let s = 1;
 let m = 2;
 let d = 3
 let b = 5;
 console.log("The final price is " + calculateInvoice(s, m, d, b));




 let hummus = 5;
 let hamburger = 5.99;
 let cake = 5.40;
 let tee = 2.5;
 console.log("Main dish is : " + hamburger + "\n" + "starter is :" + hummus + "\n" + " dessert is " + cake + "\n" + "beverage is " + tee + "\n" +
     "The total price is :" + calculateInvoice(hummus, hamburger, cake, tee));



 let salad = 5.99;
 let kebab = 3.99;
 let cake1 = 4.60;
 let cappuccino = 3.5;
 console.log("Main dish is : " + kebab + "\n" + "starter is :" + salad + "\n" + " dessert is " + cake1 + "\n" + "beverage is " + cappuccino + "\n" +
     "The total price is :" + calculateInvoice(salad, kebab, cake1, cappuccino));






 let soup = 3.99;
 let schnitze = 6.99;
 let cake2 = 4.60;
 let coffee = 3;
 console.log("Main dish is : " + schnitze + "\n" + "starter is :" + soup + "\n" + " dessert is " + cake2 + "\n" + "beverage is " + coffee + "\n" +
     "The total price is :" + calculateInvoice(soup, schnitze, cake2, coffee));



 function studentInvoice(starter, maindish, dessert, beverage) {

     return (starter + maindish + dessert) * 0.9 + beverage;

 }


 let hummus1 = 5;
 let hamburger1 = 5.99;
 let cake5 = 5.40;
 let tee1 = 2.5;
 console.log("The final price for student is " + studentInvoice(hummus1, hamburger1, cake5, tee1));



 let salad1 = 5.99;
 let kebab1 = 3.99;
 let cake4 = 4.60;
 let cappuccino1 = 3.5;
 console.log("The final price for student is " + studentInvoice(salad1, kebab1, cake4, cappuccino1));



 let soup1 = 3.99;
 let schnitze1 = 6.99;
 let cake3 = 4.60;
 let coffee1 = 3;
 console.log("The final price for student is " + studentInvoice(soup1, schnitze1, cake3, coffee1));









 function calculateInvoice1() {
     let starter = document.getElementById("starterPrice").value;
     let maindish = document.getElementById("maindishPrice").value;
     let dessert = document.getElementById("dessertPrice").value;
     let beverage = document.getElementById("beverageprice").value;
     document.getElementById("sum").innerHTML = Number(starter) + Number(maindish) + Number(dessert) + Number(beverage);

 }
 document.getElementById("sum1").addEventListener("click", calculateInvoice1)