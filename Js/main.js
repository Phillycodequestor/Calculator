$(document).ready(function(){


var toprow = [];
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

//CALLS OPERATOR FUNC TO RECEiVE FUNCTION + - * /
/*
$('.opera').click(function(){

v = " ";

toprow.push(this.value);
$('#numbers').html(toprow.join(' '));

operation(operator);

operation = op(this.value);
 
biggie(total);

operator = 0;
});
*/

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
var operation = function (num){
total = num;
};
total = " "; 
cleartop();
});



//start here: may not need first condition; what if sign clicked first?
$('.opera').click(function(){
if(toprow.length < 1){

}
else if(isNaN(toprow[toprow.length - 1])){

}

else {
//proceed as normal	
}
});

});