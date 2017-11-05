$(document).ready(function(){

var q = " ";
var v = " ";
var total = 0;
var operand = " ";
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
//sends bottom to top when operand clicked
//START HERE get plus sign to tally and display
$('.opera').click(function(){
if(this.value === " +"){
operand = "+=";
}
});

$('.number').click(function(){

if(operand === "+="){
	total += parseInt(this.value);
	alert(total);
}
else {
	total += parseInt(this.value);
};

});



/*
var add = {
	value: "+"
};
var subtract = {
	value: "-"
};
var divide = {
	value: "/"
};
var multiply = {
	value: "*"
}
*/



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