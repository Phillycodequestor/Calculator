$(document).ready(function(){


var toprow = [0];
var v = " ";
var total = 0;
var operation = function (num){
total = num;
};
var operator = 0;

						
//displays number in bottom row
function biggie(num){
$('#total').html(num);	
}; 

//////////////////
$('.number').click(function(){
v += $(this).attr('value');
biggie(v);
if(isNaN(toprow[toprow.length - 1])){
toprow.push(v);
}
else{
toprow.pop();
toprow.push(v);
}
operator = parseInt(v);
});

//Click equals: call cleartop and tally in bottom row
$('#equals').click(function(){
operation(operator);
biggie(total);
total = 0;
operator = 0;
v = " ";
cleartop();
});

//Clear top row
function cleartop(){
$('#numbers').html(' ');
toprow = [0];
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

//start here: is this working?
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

$('.opera').click(function(){
if(isNaN(toprow[toprow.length - 1])){
toprow.pop();
toprow.push(this.value);
$('#numbers').html(toprow.join(' '));
operation = op(this.value);
}
else {
toprow.push(this.value);
$('#numbers').html(toprow.join(' '));	
v = " ";
operation(operator);

operation = op(this.value);
 
biggie(total);

operator = 0;
}
});

});