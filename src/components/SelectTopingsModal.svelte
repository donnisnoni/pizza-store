<script>
  import { createEventDispatcher } from "svelte";
  import topings from "../constants/Topings";

  const emit = createEventDispatcher();

  let thisEl;

  export let selectedTopings = [];
  export let selectedTopingsId = [];

  export function open() {
    thisEl.showModal();
  }

  export function close() {
    thisEl.close();
  }

  function addToCart() {
    selectedTopings = selectedTopingsId.map((id) =>
      topings.find((toping) => toping.id === id)
    );
    emit("add-to-chart", [...selectedTopings]);
    selectedTopings = [];
    selectedTopingsId = [];
  }
</script>

<dialog class="select-topings-modal" bind:this={thisEl}>
  <h2>Topings</h2>

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
      Close
    </button>
    <button class="add-to-cart-button-on-modal" on:click={addToCart}>
      Add to cart
    </button>
  </div>
</dialog>
