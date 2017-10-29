$(document).ready(function(){

var q = " ";
var v = " ";

//holds numbers etc. chained together in display
function chain(num){
q += num; 
$('#numbers').html(q);
}; 

$('button').click(function(){
v = ($(this).attr('value'));
chain(v);
});



});