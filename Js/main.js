$(document).ready(function(){
 
var workingnumber = "";

//i give up :(
$('.number').click(function(){

workingnumber += $(this).val();

call();


});

function call(){
	confirm(workingnumber);
}
});///ends docready




