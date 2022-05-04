<script>
  export let item;

  $: totalTopingPrice = item.topings
    .map((toping) => toping.price)
    .reduce((a, b) => a + b, 0);
  $: pizzaPrice = item.discountPrice ? item.discountPrice : item.price;
</script>

<div class="pizza-cart-item">
  <img src="./images/{item.img}" alt={item.name} />
  <div class="pizza-name-and-price-wrapper">
    <h3 class="pizza-name">{item.name}</h3>
    <div class="pizza-topings">
      {item.topings.map((toping) => toping.label).join(", ")}
    </div>
    <div class="pizza-prices">
      <div class="pizza-price">
        ${totalTopingPrice + pizzaPrice}
      </div>
    </div>
  </div>
</div>
