$(document).ready(function(){

var q = " ";
var v = " ";
var total = " ";
var operand = " ";
var operation = function (num){
total = num;
};

//displays number in top row
function chain(num){
q += " " + num; 
return q;
};

//displays number in bottom row
function biggie(num){
$('#total').html(num);	
}; 

//Gets the number clicked and sends to operation function
$('.number').click(function(){
//$('#total').html(" ");
v = parseInt($(this).attr('value'));
operation(v);
biggie(v);
chain(v);
});

//CALLS OPERATOR FUNC TO RECEiVE FUNCTION + - * /
$('.opera').click(function(){
operation = operator(this.value);
biggie(total);
$('#numbers').html(chain(this.value));
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




//START HERE: Get equals sign to work. guard against double clicks on operators.


//Clears both rows
$('#Clearevery').click(function(){
q = " ";
v = 0;
$('#numbers').html(q);
$('#total').html(v);
v = " ";
});

//Clears bottom row
$('.Clearlowrow').click(function(){
v = 0;
$('#total').html(v);
v=" ";
});

});