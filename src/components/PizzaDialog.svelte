<script>
  import { createEventDispatcher } from "svelte";
  import topings from "../constants/Topings";

  const emit = createEventDispatcher();

  let thisEl;
  let pizza = {
    name: "",
    discountPrice: 0,
    price: 0,
    img: "",
  };

  export let selectedTopingsId = [];

  export function open(_pizza) {
    pizza = { ..._pizza };
    thisEl.showModal();
  }

  export function close() {
    thisEl.close();
  }

  function addToCart() {
    emit("add-to-chart", [...selectedTopings]);
    onClose();
  }

  function onClose() {
    selectedTopingsId = [];
  }

  $: selectedTopings = selectedTopingsId.map((id) =>
    topings.find((toping) => toping.id === id)
  );
  $: totalSelectedTopings = selectedTopings.reduce(
    (topingA, topingB) => topingA + topingB.price,
    0
  );
</script>

<dialog class="select-topings-modal" bind:this={thisEl} on:close={onClose}>
  <h2>{pizza.name}</h2>

  <img
    class="pizza-img"
    src="./images/{pizza.img}"
    alt={pizza.name}
    title={pizza.name}
  />

  <div class="pizza-prices">
    {#if pizza.discountPrice}
      <span class="pizza-price-before">
        ${pizza.price + totalSelectedTopings}
      </span>
    {/if}
    <div class="pizza-price">
      ${(pizza.discountPrice ? pizza.discountPrice : pizza.price) +
        totalSelectedTopings}
    </div>
  </div>

  <h3 class="mt-1">Select topings</h3>
  <div class="toping-list">
    {#each topings as toping, index}
      <div class="toping-list-item">
        <label>
          <input
            type="checkbox"
            name="topings"
            bind:group={selectedTopingsId}
            value={toping.id}
          />
          <span class="toping-list-item-name">
            {toping.label} (${toping.price})
          </span>
        </label>
      </div>
    {/each}
  </div>

  <div class="modal-actions">
    <button class="button-close-select-topings-modal" on:click={close}>
      Cancel
    </button>
    <button class="add-to-cart-button-on-modal" on:click={addToCart}>
      Add to cart
    </button>
  </div>
</dialog>
