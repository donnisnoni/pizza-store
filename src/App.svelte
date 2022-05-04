<script lang="ts">
  import Item from "./components/Item.svelte";
  import CartItem from "./components/CartItem.svelte";
  import PizzaDialog from "./components/PizzaDialog.svelte";
  import { carts } from "./stores/Carts";
  import pizzas from "./constants/Pizzas";

  let pizzaDialog: PizzaDialog;

  let currentSelectedPizza = null;

  function openPizzaDialog(pizza) {
    currentSelectedPizza = { ...pizza };
    pizzaDialog.open(currentSelectedPizza);
  }

  function addToCart({ detail: topings }) {
    currentSelectedPizza.topings = topings;
    carts.update((prevCarts) => [...prevCarts, currentSelectedPizza]);
    pizzaDialog.close();
  }

  $: pizzaCartTotal = $carts
    .map((pizza) => (!!pizza.discountPrice ? pizza.discountPrice : pizza.price))
    .reduce((pizzaA, pizzaB) => pizzaA + pizzaB, 0);
  $: topingsCartTotal = $carts
    .map((pizza) => pizza.topings.map((toping) => toping.price))
    .flat()
    .reduce((pizzaA, pizzaB) => pizzaA + pizzaB, 0);
</script>

<heading class="main-heading">
  <h1>Pizza Store</h1>
</heading>

<div class="pizza-store-main">
  <div class="pizza-list-wrapper">
    <h2>Pizza List</h2>
    <div class="pizza-list">
      {#each pizzas as pizza}
        <Item item={pizza} on:add-to-cart={() => openPizzaDialog(pizza)} />
      {/each}
    </div>
  </div>

  <div class="cart-wrapper">
    <h2>Cart ({$carts.length})</h2>
    <div class="pizza-list">
      {#each $carts as cart, index}
        <CartItem {index} item={cart} />
      {/each}
    </div>
    <div class="cart-total">
      Total <span class="price">${pizzaCartTotal + topingsCartTotal}</span>
    </div>
  </div>

  <PizzaDialog bind:this={pizzaDialog} on:add-to-chart={addToCart} />
</div>

<footer class="footer">
  Developed with ❤️ by <a target="_blank" href="https://github.com/donnisnoni">
    Don Alfons Nisnoni
  </a>
</footer>
