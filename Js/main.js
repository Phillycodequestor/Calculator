$(document).ready(function(){




//displays number in bottom row
function biggie(num){
$('#total').html(num);	
};

//TEST THIS
$('.number').click(function(){
//biggie($(this).attr('value'));
var returnednumber = number($(this).attr('value'));
});

function number(val){
var total += val;
return total;
}

$('.opera').click(function(){

});

//RETURNS A FUNCTION TO PERFORM OPERATION/////////////////////////
function op(val) {
if(val === "+"){
return function (num){
total += num;
};
}

else if(val === "-") {
return function (num){
total -= num;
};
}

else if(val === "/") {
return function (num){
total /= num;
};
}

else {
return function (num){
total *= num;
};
}
};
////////////////////////////////////////////////////////
});
