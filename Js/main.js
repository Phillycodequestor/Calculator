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
//START HERE: after user clicks equals with 1 number, addition not performed correctly
$('#equals').click(function(){
operation(total);
biggie(total);
operator = total;
v = " ";
cleartop(total);

operation = function (num){
total = num;
};
});

//Clear top row
function cleartop(tot){
$('#numbers').html(' ');
toprow = [tot];
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