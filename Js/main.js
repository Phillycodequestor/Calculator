$(document).ready(function(){

var q = " ";
var v = " ";
var total = " ";
var operand = " ";
var operation = function (num){
total = num;
};

//adds to top row variable
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
v = parseInt($(this).attr('value'));

biggie(v);
chain(v);
});

//Clear top row
function cleartop(){
q = " ";
$('#numbers').html(q);
q = $('#total').html();
}

//CALLS OPERATOR FUNC TO RECEiVE FUNCTION + - * /
$('.opera').click(function(){
operation(v);
operation = operator(this.value);
biggie(total);
$('#numbers').html(chain(this.value));
});

//Click equals: call cleartop and tally in bottom row
$('#equals').click(function(){
	biggie(total);
	cleartop();
});

//Clears both rows
$('#Clearevery').click(function(){
//START HERE: needs to clear number out of top row variable, too; fix equals; disable operators, 	
v = 0;
biggie(v);
v = " ";
});

//Clears bottom row
$('.Clearlowrow').click(function(){
v = 0;
$('#total').html(v);
v=" ";
});

//RETURNS A FUNCTION TO PERFORM OPERATION/////////////////////////
function operator (val) {
if(val === "+"){
return function (num){
total += num;
};
}

else if(val === "-") {
return function (num){
total -= num;
};
}

else if(val === "/") {
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

});