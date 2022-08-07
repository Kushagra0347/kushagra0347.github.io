const cartProduct = $(".cart-product");
const addRemoveBtnHolder = $(".add-remove-buttons");
const addBtns = $(".quantity .add");
const qty = $(".quantity span");
const productPriceContainer = $(".cart-product .price");
const removeBtns = $(".quantity .remove");
const totalQtyContainer = $(".total-quantity");
const totalPriceContainer = $(".total-price");
const itemText = $(".item-text");
const n = addBtns.length;
const deleteBtns = $(".product-footer .delete");

let itemsInCart = [];
for (let i = 0; i < n; i++) {
  itemsInCart[i] = 1;
}

function changeQty(ele, items) {
  $(ele).closest(".quantity").find("span").text(items);
}
function changeCartTotal(itemArr) {
  let totalItems = 0;
  for (let i = 0; i < n; i++) {
    totalItems += itemArr[i];
  }

  totalQtyContainer.each(function (index, _) {
    $(totalQtyContainer[index]).text(totalItems);
    if (totalItems > 1 || totalItems == 0) {
      itemText.each(function (idx, _) {
        $(itemText[idx]).text("items");
      });
    } else {
      itemText.each(function (idx, _) {
        $(itemText[idx]).text("item");
      });
    }
  });
}
changeCartTotal(itemsInCart);

addBtns.each(function (index, _) {
  let addBtn = $(addBtns[index]);
  addBtn.click(function () {
    itemsInCart[index]++;
    changeQty(this, itemsInCart[index]);
    changeCartTotal(itemsInCart);
  });
});

removeBtns.each(function (index, _) {
  let removeBtn = $(removeBtns[index]);
  removeBtn.click(function () {
    itemsInCart[index]--;
    if (itemsInCart[index] >= 1) {
      changeQty(this, itemsInCart[index]);
      changeCartTotal(itemsInCart);
    } else {
      $(this).closest(".cart-product").addClass("hide");
      changeCartTotal(itemsInCart);
    }
  });
});

deleteBtns.each(function (index, _) {
  let deleteBtn = $(deleteBtns[index]);
  deleteBtn.click(function (_) {
    itemsInCart[index] = 0;
    $(this).closest(".cart-product").addClass("hide");
    changeCartTotal(itemsInCart);
  });
});
