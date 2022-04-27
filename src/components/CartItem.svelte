<script>
  export let item;
</script>

<div class="pizza-cart-item">
  <img src="/images/{item.img}" alt={item.name} />
  <div class="pizza-name-and-price-wrapper">
    <h3 class="pizza-name">{item.name}</h3>
    <div class="pizza-topings">
      {item.topings.map((toping) => toping.label).join(", ")}
    </div>
    <div class="pizza-prices">
      <div class="pizza-price">
        ${item.discountPrice
          ? item.discountPrice +
            item.topings.reduce((a, b) => a.price + b.price)
          : item.price}
      </div>
    </div>
  </div>
</div>
