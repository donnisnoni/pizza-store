<script>
  let thisEl;

  export let topings = [
    {
      label: "Avocado",
      price: 1,
    },
    {
      label: "Lobster",
      price: 2,
    },
    {
      label: "Bacon",
      price: 3,
    },
    {
      label: "Broccoli",
      price: 1,
    },
    {
      label: "Oyster",
      price: 2,
    },
    {
      label: "Duck",
      price: 3,
    },
    {
      label: "Onions",
      price: 1,
    },
    {
      label: "Salmon",
      price: 2,
    },
    {
      label: "Ham",
      price: 3,
    },
    {
      label: "Zucchini",
      price: 1,
    },
    {
      label: "Tuna",
      price: 2,
    },

    {
      label: "Sausage",
      price: 3,
    },
  ];

  export function open() {
    thisEl.showModal();
  }

  export function close() {
    thisEl.close();
  }
</script>

<dialog class="select-topings-modal" bind:this={thisEl}>
  <h2>Topings</h2>

  <div class="toping-list">
    {#each topings as toping}
      <div class="toping-list-item">
        <label>
          <input type="checkbox" />
          <span class="toping-list-item-name">
            {toping.label} (${toping.price})
          </span>
        </label>
      </div>
    {/each}
  </div>
</dialog>
