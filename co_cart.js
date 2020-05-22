"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Jorge Collazo
   Date:   5-18-20
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.onload.addEventListener("onchange", calcCart);
for(var i = 0; i < calcCart.length; i++){
   document.addEventListener("onclick", calcCart)
}


function calcCart(){
   var orderCost = document.getElementById("modelCost") * document.getElementById("modelQty");
   orderCost.value = formatUSCurrency(249.95);
   var shipCost = document.getElementById("shipingCost").formatNumber(1000, 2);
   document.getElementById("subTotal") = orderCost + shipCost.formatNumber(1000, 2);
   var salesTax = (orderCost.value + shipCost.value) * 0.05;
   salesTax.value = document.getElementById("salesTax");
   document.getElementById("cartTotal") = orderCost.value + shipCost.value + salesTax.value
}





function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
