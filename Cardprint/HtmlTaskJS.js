
function checkQuantity() {
	var  q = document.getElementById("quatity").value;
	
	 if( q < 1 || q > 1000){
		 alert ("You have entered an invalid quantity. ");
	 }
}


function calcPriceLow(){

var	a = document.getElementById ("quatity").value;

if ( a >= 1 && a <= 1000){
	var b = a /10;
	alert ("This transation comes to: £" +b+ " Press OK to continue.");
}
}


function calcPriceMed(){
var	med = document.getElementById ("quatity").value;

if ( med >= 1 && med <= 1000){
	var c = med/6.6666666666666667;
	alert ("This transation comes to: £" +c+ " Press OK to continue.");
}
}


function calcPriceHigh(){
var	high = document.getElementById ("quatity").value;

if ( high >= 1 && high <= 1000){
	var d = high/5;
	alert ("This transation comes to: £" +d+ " Press OK to continue.");
}
}