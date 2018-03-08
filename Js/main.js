$(document).ready(function(){
 
 //sets runningtotal
var setrunningtotal = (function(){
var total = "";
return function(num){
total += num;
return parseInt(total);
};
}());


//displays runningtotal
$('.number').click(function(){
var runningtotal = setrunningtotal($(this).val());
$('#total').html(runningtotal);
});

$('.opera').click(function(){
//when this clicked, add runningtotal to answer

});


});///ends docready




