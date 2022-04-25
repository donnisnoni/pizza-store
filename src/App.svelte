<script>
  import Item from "./components/Item.svelte";

  let pizzas = [
    {
      name: "American Classix Cheeseburger",
      discountPrice: 8,
      price: 10,
      img: "american-classic-cheeseburger-550x550px.png",
    },
    {
      name: "Grilled Beef Supreme",
      discountPrice: 0,
      price: 12,
      img: "grill-beef-supreme-550x550px.png",
    },
    {
      name: "Cheesy Meatball Blast",
      discountPrice: 0,
      price: 15,
      img: "meatballpizzathumbnail.png",
    },
  ];
</script>

<heading class="main-heading">
  <h1>Pizza Store</h1>
</heading>

<div class="pizza-store-main">
  <div class="pizza-list-container">
    <h2>Pizza List</h2>
    <div class="pizza-list">
      {#each pizzas as pizza}
        <Item item={pizza} />
      {/each}
    </div>
  </div>

  <div class="cart">
    <h2>Cart</h2>
  </div>
</div>
