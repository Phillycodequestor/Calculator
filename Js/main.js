$(document).ready(function(){

 

//Displays clicked number
var setrunningtotal = (function(){
var total = "";
return function(num){
	//NEXT: place if statement here to clear total.
total += num;
$('#total').html(total);
};
}());

//Sends clicked number to be displayed
$('.number').click(function(){
setrunningtotal($(this).val());
});


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
function getfunction(){
if (sign === "+"){
return function() {
return answer += parseInt($('#total').text());
}
}
else if (sign === "-") {
return function() {
return answer -= parseInt($('#total').text());
}
}
else if (sign === "*") {
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
}
}());
});///ends docready

//$('#total').html(answer);




