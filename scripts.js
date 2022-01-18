var price, crust_price, topping_price ;
let total=0
function Getpizza(name,size,crust,topping,total){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

// continue/proceed button
$(document).ready(function(){
    $("button.proceed").click (function(event){
        let pname = $("#name option:selected").val();
        let psize = $('#size option:selected').val();
        let pcrust = $('#crust option:selected').val();
        let ptopping = [];
        $.each($(input['.toppings:checked'],function(){
            ptopping.push($(this).val());
        }))
        console.log(ptopping.join(','))
    });
});


switch(psize){
    case '0':
        cost = 0;
    break;
    case 'large':
        price = 1000;
        console.log(price);
    break;
    case 'medium':
        price = 750;
        console.log('the price is'+price);
    break;
    case 'small':
        price = 500;
        console.log ('the price is' +price);
    default:
        console.log('error');
}
switch (pcrust) {
    case '0':
        crust_price = 0;
    break;
    case 'Crispy':
        crust_price = 200;
    break;
    case 'Glutten free':
        crust_price = 150;
    break;
    case 'Thick':
        crust_price = 100;
    break;
    default:
    console.log('nill')
    
}
let topping_value = ptopping.length*50;
console.log('topping value'+ topping_value);

if ((psize == '0') && (pcrust == '0')){
    console.log('select one option');
    $('button.proceed').show();
    $('#information').show();
    $('div.choice').hide();
    alert('kindly select your pizza size and crust option');
}
else{
    $('button.proceed').hide();
    $('#information').hide();
    $('div.choice').slideDown(2000);
}
total = price + crust_price + topping_value;
console.log(total);
let checkoutTotal = 0;
checkoutTotal = checkoutTotal + total;

$('#pizzaname').html($('name option:selected').val());
$('#pizzasize').html($('#size option:selected').val());
$('#pizzacrust').html($('#crust option:selected').val());
$('#pizzatopping').html($(ptopping.join ('')));
$('#totals').html(total);

// add more pizza
$('button.addPizza').click(function(){
    let pname = $('.name option:selected').val ();
    let psize = $('#size option:selected').val ();
    let pcrust = $('#crust option:selected').val ();
    let ptopping = [];
    $.each($(input['.toppings:checked'],function(){
        ptopping.push($(this).val());
    }));
    console.log(ptopping.join(", "));
    switch(psize){
        case'0':
            cost = 0;
        break;
        case 'large':
            price = 1000;
            console.log(price);
        break;
        case 'medium':
            price = 750;
            console.log('the price is'+price);
        break;
        case 'small':
            price = 500;
            console.log ('the price is' +price);
        default:
            console.log('error');
        }
        switch (pcrust) {
            case '0':
                crust_price = 0;
            break;
            case 'Crispy':
                crust_price = 200;
            break;
            case 'Glutten free':
                crust_price = 150;
            break;
            case 'Thick':
                crust_price = 100;
            break;
            default:
            console.log('nill')
        }
        let topping_value = ptopping.length*50;
        console.log('topping value'+ topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log(checkoutTotal);

    var newOrder = new Getpizza(pname,psize,pcrust,ptopping,total);

    });
