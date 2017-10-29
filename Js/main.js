$(document).ready(function(){

var q = " ";
var v = " ";

//holds numbers etc. chained together in display
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
chain(v);
biggie(v);
});

//Clears all from top row
$('#Clearevery').click(function(){
q = " ";
$('#numbers').html(q);
});

});