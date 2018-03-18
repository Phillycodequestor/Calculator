$(document).ready(function(){
//NEXT: WHAT HAPPENS WHEN SIGN PRESSED
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
 //nummachine.add($(this).val());
});


$('.opera').click(function(){

});

var nummachine = (function(){
var answer = "";
	
	return {
	add: function(digit){
	answer += digit;
	//alert(answer);
	}
	/*
	subtract: function(){
	answer -= digit;
	alert(answer);
	}
	*/ 

	}; 

})();


});///ends docready




