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
numbermachine($(this).val());
});

function numbermachine(sign){
var operation = getfunction(sign);
alert(operation); 
};

function getfunction(opera){
if (opera === "+"){
return function() {
answer += parseInt($('#total').text());
}
}
else {
return "no operation"
} 
}

});///ends docready

//$('#total').html(answer);




