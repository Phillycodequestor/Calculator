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
$('.number').click(function(){
$('#total').html(" ");
v += ($(this).attr('value'));
biggie(v);
});

//sends bottom to top when operand clicked
$('.opera').click(function(){
chain($('#total').html() + $(this).attr('value'));
v = " ";
});

//Clears both rows
$('#Clearevery').click(function(){
q = " ";
v = 0;
$('#numbers').html(q);
$('#total').html(v);
v = " ";
});


});