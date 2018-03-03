$(document).ready(function(){
 


var setrunningtotal = (function(){

var total = "";
return function(num){
	total += num;
 	return parseInt(total);
};

}());

//Rig this to perform the operation
$('.number').click(function(){

$('#total').html(setrunningtotal($(this).val()));

});


});///ends docready




