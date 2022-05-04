import { writable } from "svelte/store";

const lsNamespace = "carts";

if (!localStorage.getItem(lsNamespace)) {
  localStorage.setItem(lsNamespace, JSON.stringify([]));
}

export const carts = writable(JSON.parse(localStorage.getItem(lsNamespace)));

carts.subscribe((theCarts) =>
  localStorage.setItem(lsNamespace, JSON.stringify(theCarts))
);

export function removeFromCart(index) {
  carts.update((oldcart) => {
    oldcart.splice(index, 1);
    return oldcart;
  });
}
