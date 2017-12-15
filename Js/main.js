$(document).ready(function(){


var toprow = [];
var v = " ";
var total = " ";
var operation = function (num){
total = num;
};

						
//displays number in bottom row
function biggie(num){
$('#total').html(num);	
}; 

//Gets the number clicked and sends to operation function
$('.number').click(function(){
v = parseInt($(this).attr('value'));
biggie(v);
operation(v);
toprow.push(v)
});


//CALLS OPERATOR FUNC TO RECEiVE FUNCTION + - * /
$('.opera').click(function(){

//START HERE: double check that main operation works(what if second operand changes?)
if (isNaN(toprow[toprow.length - 1])){
toprow.pop();
toprow.push(this.value);
}

else{
toprow.push(this.value);
}

$('#numbers').html(toprow.join(' '));


operation = operator(this.value);

biggie(total);

});

//Click equals: call cleartop and tally in bottom row
$('#equals').click(function(){
	biggie(total);
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

////Clear buttons
//Clear top row
function cleartop(){
$('#numbers').html(' ');
toprow = [];
toprow.push(total);
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

});