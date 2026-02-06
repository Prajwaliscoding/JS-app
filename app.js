let totalPrice;

function calculateShippingCost(price) {

  let shippingCost;
  if (price <= 10) {
    shippingCost = 5;
  } else if (price <= 20) {
    shippingCost = 3;
  } else {
    shippingCost = 0;
  }

  console.log(`Shipping cost for you is ${shippingCost}`);
}


totalPrice = 19;
calculateShippingCost(totalPrice);