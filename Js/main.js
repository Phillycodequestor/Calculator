$(document).ready(function(){

var q = " ";
var v = " ";

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
$('button').click(function(){
v += ($(this).attr('value'));
biggie(v);
});

//Clears both rows
$('#Clearevery').click(function(){
q = " ";
v = " ";
$('#numbers').html(q);
$('#total').html(v);
});

//sends bottom to top when operand clicked
$('.opera').click(function(){
chain($('#total').html());
$('#total').html(" ");
v = " ";
});




});