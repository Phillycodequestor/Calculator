$(document).ready(function(){

/*
var setrunningtotal = (function(){
var total = "";
return function(num){
total += num;
return parseInt(total);
};
}());
*/

//displays runningtotal
$('.number').click(function(){
//var runningtotal = setrunningtotal($(this).val());
 
//$('#total').html(runningtotal);

nummachine.add($(this).val());
});

$('.opera').click(function(){


});

var nummachine = (function(){
var answer = "";
	
	return {
	add: function(digit){
	answer += digit;
	alert(answer);
	}
	}; 

})();


});///ends docready




