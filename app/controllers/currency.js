exports.convert = function (req, res) {
    const request = require('request');

    var currencyFrom = req.body.currencyFrom;
    var currencyTo = req.body.currencyTo;
    var price = req.body.price;

    var convertedPrice;
    request.get('https://api.exchangeratesapi.io/latest?base=' + req.body.currencyFrom, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        convertedPrice = price * body.rates[currencyTo];
        convertedPrice = Math.round(convertedPrice * 100)/100;
        res.json({
            price: convertedPrice
        });
       
    });
};
