// Using functions to add and display tax




var sale1;
var sale2;
var sale3;
var sale4; 
var sale;
var calculateTaxAndDisplay;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 12 }; 

calculateTaxAndDisplay = function (saleObj) {
    saleObj.tax = saleObj.price * saleObj.taxRate / 100;
    saleObj.total = saleObj.price + saleObj.tax;

    console.log("price = $" + saleObj.price);
    console.log("tax @ " + saleObj.taxRate + "% = $" + saleObj.tax);
    console.log("total cost = $" + saleObj.total);
    console.log("----------------------------------");
};

calculateTaxAndDisplay(sale1);


calculateTaxAndDisplay(sale2);


calculateTaxAndDisplay(sale3);


calculateTaxAndDisplay(sale4);


/* Further Adventures
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 * Having two separate functions to calculate tax
 * and display sales is good, each has a specific purpose.
 * Having to call both functions
 * for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
 */