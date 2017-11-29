$(document).ready(function(){

var toprow = [];
var v = " ";
var total = " ";
var operand = " ";
var operation = function (num){
total = num;
};
						
//adds to top row variable
//function chain(num){
//q += " " + num; 
//return q;
//};

//displays number in bottom row
function biggie(num){
$('#total').html(num);	
}; 

//Gets the number clicked and sends to operation function
$('.number').click(function(){
v = parseInt($(this).attr('value'));
toprow.push(v);
//biggie(v);
});

//START HERE:  get commas out of array. 
//CALLS OPERATOR FUNC TO RECEiVE FUNCTION + - * /
$('.opera').click(function(){
if (isNaN(toprow[toprow.length - 1])){
toprow.pop();
toprow.push(this.value);
}
else{
toprow.push(this.value);
}

//operation(v);
//operation = operator(this.value);
//biggie(total);

$('#numbers').html(toprow.toString());
});

//Click equals: call cleartop and tally in bottom row
$('#equals').click(function(){
	biggie(total);
	cleartop();
});

//Clear top row
function cleartop(){
$('#numbers').html(toprow);
//q = $('#total').html();
}

//Clears number entered
$('#Clearevery').click(function(){
v = 0;
biggie(v);
v = " ";
});

//Clears everything
$('.Clearlowrow').click(function(){
v = 0;
$('#total').html(v);
v=" ";
var operation = function (num){
total = num;
};
total = " "; 
cleartop();
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