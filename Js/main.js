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


$('.opera').click(function(){
numbermachine();
});
//$(this).val();

//NEXT: change operation based on which sign clicked.
var numbermachine = (function(){
var answer = 0;
var operation = function() {
return answer += parseInt($('#total').text());
} 
return function(){
alert(operation()); 
//operation = getfunction(sign);
//alert(operation);
}
}());

/*

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




