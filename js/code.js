let itemsContainer = document.querySelector(".shopping-cart");
let items = Array.from(itemsContainer.children);

// console.log(items);

// get initial total price
let totalPrice = 0;
let productsPrices = Array.from(document.querySelectorAll(".productPrice"));
productsPrices.forEach((prPrice) => {
  totalPrice += parseInt(prPrice.innerHTML);
});
// console.log(productsPrices);

document.querySelector(".totalPrice").innerHTML = totalPrice;

items.forEach((item, index) => {
  console.log(item.children);

  // handle increment
  item.children[5].addEventListener("click", function () {
    totalPrice += parseInt(item.children[1].children[1].innerHTML);
    item.children[3].innerHTML = parseInt(item.children[3].innerHTML) + 1;
    document.querySelector(".totalPrice").innerHTML = totalPrice;
  });

  //handle decrement
  item.children[6].addEventListener("click", () => {
    if (parseInt(item.children[3].innerHTML) <= 1) {
      item.remove();
    }
    totalPrice -= parseInt(item.children[1].children[1].innerHTML);
    item.children[3].innerHTML = parseInt(item.children[3].innerHTML) - 1;
    document.querySelector(".totalPrice").innerHTML = totalPrice;
  });

  //handle delete
  item.children[7].addEventListener("click", () => {
    pricetominus =
      parseInt(item.children[1].children[1].innerHTML) *
      parseInt(item.children[3].innerHTML);
    totalPrice -= pricetominus;
    document.querySelector(".totalPrice").innerHTML = totalPrice;
    item.remove();
  });

  //handle like
  let isLiked = false;
  item.children[8].addEventListener("click", () => {
    if (isLiked) {
      item.children[8].children[0].style = "color:black";
      isLiked = false;
    } else {
      isLiked = true;
      item.children[8].children[0].style = "color:red";
    }
  });
});
    