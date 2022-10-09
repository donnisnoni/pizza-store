import type Pizza from "src/constants/Pizza";
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

const lsNamespace: string = "carts";

if (!localStorage.getItem(lsNamespace)) {
  localStorage.setItem(lsNamespace, JSON.stringify([]));
}

export const carts: Writable<Array<Pizza>> = writable(
  JSON.parse(localStorage.getItem(lsNamespace))
);

carts.subscribe((theCarts) =>
  localStorage.setItem(lsNamespace, JSON.stringify(theCarts))
);

export function removeFromCart(index: number) {
  carts.update((oldcart) => {
    oldcart.splice(index, 1);
    return oldcart;
  });
}
