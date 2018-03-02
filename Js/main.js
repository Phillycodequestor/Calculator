$(document).ready(function(){
 


var setrunningtotal = (function(){

var total = "";
return function(num){
	return total += num;
};

}());

//Rig this to perform the operation
$('.number').click(function(){

alert(setrunningtotal(5));

});


});///ends docready




