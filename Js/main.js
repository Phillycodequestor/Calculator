$(document).ready(function(){

var q = " ";
var v = " ";
var r = " ";


function chain(num){
q += num; 
$('#numbers').html(q);
};

function biggie(num){
$('#total').html(num);	
}; 

//sends buttons value to top row
$('button').click(function(){
v = ($(this).attr('value'));
biggie(v);
});

//Clears all from top row
$('#Clearevery').click(function(){
q = " ";
$('#numbers').html(q);
});

//START HERE: only operand showing up in top row 
$('.opera').click(function(){
r = ($(this).attr('value'));
chain($('#total').val() + r);
});


});