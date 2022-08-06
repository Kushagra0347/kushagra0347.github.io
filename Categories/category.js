const addToCartHolder = $(".add-to-cart-holder");
const addToCartBtns = $(".add-to-cart");
const addRemoveQty = $(".add-remove-buttons");
const addBtns = $(".add-remove-buttons .add-btn");
const qty = $(".add-remove-buttons .quantity");
const removeBtns = $(".add-remove-buttons .remove-btn");
9;
const n = addBtns.length;

let itemsInCart = [];
for (let i = 0; i < n; i++) {
  itemsInCart[i] = 0;
}

function changeQty(ele, items) {
  $(ele)
    .closest(".add-to-cart-holder")
    .find(".add-remove-buttons .quantity")
    .text(items);
}

addToCartBtns.each(function (index, _) {
  const addToCartBtn = $(addToCartBtns[index]);
  addToCartBtn.click(function () {
    $(this).addClass("hide");
    $(this).next(".add-remove-buttons").removeClass("hide");
    itemsInCart[index]++;
    changeQty(this, itemsInCart[index]);
  });
});

addBtns.each(function (index, _) {
  let addBtn = $(addBtns[index]);
  addBtn.click(function () {
    itemsInCart[index]++;
    changeQty(this, itemsInCart[index]);
  });
});

removeBtns.each(function (index, _) {
  let removeBtn = $(removeBtns[index]);
  removeBtn.click(function () {
    itemsInCart[index]--;
    if (itemsInCart[index] >= 1) {
      changeQty(this, itemsInCart[index]);
    } else {
      $(this)
        .closest(".add-to-cart-holder")
        .find(".add-to-cart")
        .removeClass("hide");
      $(this)
        .closest(".add-to-cart-holder")
        .find(".add-remove-buttons")
        .addClass("hide");
    }
  });
});
