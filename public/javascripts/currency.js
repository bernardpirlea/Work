$(document).ready(() => {
    $('#currency').on('focus', function () {
        // Store the current value on focus and on change
        previous = this.value;
    }).on('change', function() {
        $.ajax({
            url: '/currency',
            type: 'POST',
            crossDomain:true, 
            dataType: 'json',
            data: { 
                "currencyFrom"  : 'USD', 
                "currencyTo" : this.value , 
                "price": $('#currency').data("value") 
            }
        }).done(function(result){
            var newPrice = 'Price: ' + result.price;
            $( "#price" ).html(newPrice);
        });
        $(this).blur();
    });
});