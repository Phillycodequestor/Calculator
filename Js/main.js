$(document).ready(function(){

var q = " ";
var v = " ";


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

//Clears all from top row
$('#Clearevery').click(function(){
q = " ";
$('#numbers').html(q);
});


$('.opera').click(function(){
chain($('#total').html());
$('#total').html(" ");
v = " ";
});


});