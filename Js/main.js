$(document).ready(function(){

var setrunningtotal = (function(){
var total = "";
return function(num){
total += num;
$('#total').html(total);
};
}());


//displays runningtotal
$('.number').click(function(){

setrunningtotal($(this).val());

});


$('.opera').click(function(){

numbermachine();
});


//1. performs the operation
//2. displays answer
//3. determines next operation****
var numbermachine = (function(){

var answer = 0;

return function() {
answer += parseInt($('#total').text());
alert(answer);
//$('#total').html(answer);
}; 
	
}());


});///ends docready




