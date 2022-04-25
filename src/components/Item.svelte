<script>
  export let item;
</script>

<div class="pizza-item">
  <img src="/images/{item.img}" alt={item.name} />
  <h3 class="pizza-name text-center">{item.name}</h3>
  <div class="pizza-price text-center">${item.price}</div>
</div>
