<script>
  export let item;
</script>

<div class="pizza-item">
  <img src="/images/{item.img}" alt={item.name} />
  <div class="pizza-name-and-price-wrapper">
    <h3 class="pizza-name">{item.name}</h3>
    <div class="pizza-prices">
      {#if item.discountPrice}
        <div class="pizza-price-before">${item.price}</div>
      {/if}
      <div class="pizza-price">
        ${item.discountPrice ? item.discountPrice : item.price}
      </div>
    </div>
  </div>
</div>
