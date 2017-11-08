$(document).ready(function(){

var q = " ";
var v = " ";
var total = 0;
var operand = " ";
var operation;
/*
//displays number in top row
function chain(num){
q += num; 
$('#numbers').html(q);
};

//displays number in bottom row
function biggie(num){
$('#total').html(num);	
}; 

//sends button's value to bottom row
$('.number').click(function(){
$('#total').html(" ");
v += ($(this).attr('value'));
biggie(v);
});
*/

//RETURNS A FUNCTION TO PERFORM OPERATION/////////////////////////
function operator (val) {

if(val === " +"){
return function add(num){
total += num;
};
}

else if(val === " -") {
return function subtract(num){
total -= num;
};
}

else if(val === " /") {
return function divide(num){
total /= num;
};
}

else {
return function multiply(num){
total *= num;
};
}
};
////////////////////////////////////////////////////////


//CALLS OPERATOR FUNC TO RECIEVE FUNCTION + - * /
$('.opera').click(function(){
operation = operator(this.value);
});
///////////////////////////////////////////////////////

//START HERE: what happens to number first time clicked?


//Clears both rows
$('#Clearevery').click(function(){
q = " ";
v = 0;
$('#numbers').html(q);
$('#total').html(v);
v = " ";
});

//Clears bottom row
$('#Clearlowrow').click(function(){
v = 0;
$('#total').html(v);
v=" ";
});

});