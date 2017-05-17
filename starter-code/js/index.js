window.onload = function() {

  var deleteProd = document.getElementById("delete");

  deleteProd.onclick = function deleteProduct() {
    console.log("hey");
  };

  var qty = document.getElementsByClassName("input");
  var unitPrice = document.getElementsByClassName("cost");
  var calculate = document.getElementById("calculatePriceButton");
  var priceResult = [];

  calculate.onclick = function getPriceByProduct(){
      for(var i = 0; i < unitPrice.length; i++){
        var totalPrice = (qty[i].value)*(unitPrice[i].textContent);
        priceResult.push(totalPrice);
        document.getElementsByClassName("total")[i].innerHTML = ("$" + priceResult[i]);
      }
  function getTotal() {
    for(var i = 0; i < priceResult.length; i++) {
      finalPrice += priceResult;
        console.log("total", pricerResult);
    }
  }
  };
};


// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//
//
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
//
// function deleteItem(e){
//
// }




// var qtyInput = document.getElementsByClassName("input");
// var unitPrice = document.getElementsByClassName("productPrice");
// var priceResult = [];
//
// function getPriceByProduct(){
//   for(var i = 0; i < unitPrice.length; i++){
//     var totalPrice = (qtyInput[i].value)*(unitPrice[i].textContent);
//     priceResult.push(totalPrice);
//     document.getElementsByClassName("totalPriceProd")[i].innerHTML = ("$" + priceResult[i]);
//   }
// }


//
// function updatePriceByProduct(productPrice, unitInput){
//   hide(productPrice);
//   if (unitInput > 0) {
//     show(productPrice);
//     productPrice.innerHTML = "price is " + unitInput;
//   }
// }

// function getTotalPrice(itemNode, quantityField) {
//   return productPrice(itemNode) * unitInput(quantityField);
//
// }
// function getItemTotal(itemField, quantityField) {
//     return getPrice(itemField) * getQuantity(quantityField);
// }

// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }
