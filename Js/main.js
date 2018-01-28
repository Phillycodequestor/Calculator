$(document).ready(function(){


var toprow = [0];
var v = " ";
//var total = 0;
var operation = function (num){
total = num;
};

//var operator = " ";

						
//displays number in bottom row
function biggie(num){
$('#total').html(num);	
};

function settotal(num){
var total = num;
return total; 
};

//START HERE: can i create a closure that contains the variable total? 
//Reads number entered sends to biggie to display
$('.number').click(function(){
//biggie($(this).attr('value'));
confirm(settotal($(this).attr('value')));
});


$('.opera').click(function(){
//operator = parseInt(operator);
operation(operator);
//operation = op(this.value);
confirm(total);
//biggie(total);
//operator = 0;
});

//Click equals: call cleartop and tally in bottom row
$('#equals').click(function(){
operation(operator);
cleartop();
v = " ";
biggie(total);
addtoarray(total);
});

function addtoarray(total){
toprow.pop();
toprow.push(total);
};

//Handles scenario where only one number selected
function singlenumber(num){
v += num;
biggie(v);
if(isNaN(toprow[toprow.length - 1])){
toprow.push(v);
}
else{
toprow.pop();
toprow.push(v);
}

};

//Clear top row
function cleartop(){
$('#numbers').html(' ');
toprow = [];
}

//RETURNS A FUNCTION TO PERFORM OPERATION/////////////////////////
function op(val) {
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
operation = function (num){
total = num;
};
cleartop();
});



});
/*
if(isNaN(toprow[toprow.length - 1])){
toprow.pop();
toprow.push(this.value);
$('#numbers').html(toprow.join(' '));

else {
toprow.push(this.value);
$('#numbers').html(toprow.join(' '));	
v = " ";
}
}
*/