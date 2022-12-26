<script>
  import clsx from "clsx";
  import { onMount } from "svelte";

  let statics = false;
  export { statics as static };
  export let open = false;

  let className = "";
  export { className as class };

  $: classes = clsx("modal", "z-4", { open }, className);

  function close() {
    if (!statics) open = false;
  }

  function keyup(e) {
    if (e.key === "Escape") {
      close();
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keyup", keyup);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keyup", keyup);
      }
    };
  });
</script>

<div data-modal on:keyup={keyup} class={classes} on:click={close}>
  <slot />
</div>
