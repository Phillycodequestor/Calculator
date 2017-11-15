$(document).ready(function(){

var q = " ";
var v = " ";
var total = " ";
var operand = " ";
var operation = function (num){
total = num;
};
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
*/

//sends button's value to bottom row
$('.number').click(function(){
//$('#total').html(" ");
v = parseInt($(this).attr('value'));
operation(v);
//biggie(v);
});

//RETURNS A FUNCTION TO PERFORM OPERATION/////////////////////////
function operator (val) {

if(val === " +"){
return function (num){
total += num;
};
}

else if(val === " -") {
return function (num){
total -= num;
};
}

else if(val === " /") {
return function (num){
total /= num;
};
}

else {
return function (num){
total *= num;
};
}
};
////////////////////////////////////////////////////////


//CALLS OPERATOR FUNC TO RECEiVE FUNCTION + - * /
$('.opera').click(function(){
operation = operator(this.value);
alert(total);
});
///////////////////////////////////////////////////////

//START HERE: First two times number clicked, it appears in bottom row, then sum appears.


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