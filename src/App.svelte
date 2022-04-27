<script>
  import Item from "./components/Item.svelte";
  import CartItem from "./components/CartItem.svelte";
  import SelectTopingsModal from "./components/SelectTopingsModal.svelte";
  import { carts } from "./stores/Carts";

  let selectTopingModal;

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
    {
      name: "Cheesy Meatball Blast",
      discountPrice: 0,
      price: 15,
      img: "meatballpizzathumbnail.png",
    },
    {
      name: "Cheesy Meatball Blast",
      discountPrice: 0,
      price: 15,
      img: "meatballpizzathumbnail.png",
    },
  ];

  let currentSelectedPizza = null;

  function selectTopings(pizza) {
    currentSelectedPizza = pizza;
    selectTopingModal.open();
  }

  function addToCart({ detail: topings }) {
    currentSelectedPizza.topings = topings;
    carts.update((prevCarts) => [...prevCarts, currentSelectedPizza]);
    selectTopingModal.close();
  }
</script>

<heading class="main-heading">
  <h1>Pizza Store</h1>
</heading>

<div class="pizza-store-main">
  <div class="pizza-list-wrapper">
    <h2>Pizza List</h2>
    <div class="pizza-list">
      {#each pizzas as pizza}
        <Item item={pizza} on:add-to-cart={() => selectTopings(pizza)} />
      {/each}
    </div>
  </div>

  <div class="cart-wrapper">
    <h2>Cart ({$carts.length})</h2>
    <div class="pizza-list">
      {#each $carts as cart}
        <CartItem bind:item={cart} />
      {/each}
    </div>
  </div>

  <SelectTopingsModal
    bind:this={selectTopingModal}
    on:add-to-chart={addToCart}
  />
</div>
