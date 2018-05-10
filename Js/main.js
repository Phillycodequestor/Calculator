$(document).ready(function(){

//Displays clicked number
var setrunningtotal = (function(){
var total = "";
return function(num){
total += num;
$('#total').html(total);
};
}());

//Sends clicked number to be displayed
$('.number').click(function(){
setrunningtotal($(this).val());
});

//try setting operation variable based on sign after performing operation
$('.opera').click(function(){
numbermachine($(this).val());
});

var numbermachine = (function(){
var answer = 0;
var operation = function() {
return answer += parseInt($('#total').text());
} 
return function(sign){
alert(operation()); 
operation = getfunction(sign);
alert(operation);
}
}());

//Problem: Answer not defined and is two different variables
function getfunction(opera){
//var answer = 0;
if (opera === "+"){
return function() {
return answer += parseInt($('#total').text());
}
}
else if (opera === "-") {
return function() {
return answer -= parseInt($('#total').text());
}
}
else if (opera === "*") {
return function() {
return answer *= parseInt($('#total').text());
}
}
else  {
return function() {
return answer /= parseInt($('#total').text());
}
}

}
*/
});///ends docready

//$('#total').html(answer);




