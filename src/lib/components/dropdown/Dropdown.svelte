<script lang="ts">
  import clsx from "clsx";

  export let open: boolean = undefined;
//   export let hover: boolean = undefined;
  export let autoClose: boolean = false;

  export let position: "left" | "top" | "bottom" | "right" = undefined;
  export let align: "start" | "center" | "end" = undefined;

  function onClick() {
    open = !open;
  }

  function onBlur() {
    if (autoClose) {
      open = !open;
    }
  }

  $: classes = clsx("dropdown-content", {
    open,
    [`dropdown-${position}`]: position,
    [`dropdown-${align}`]: align,
  });
</script>

<div class="dropdown">
  <div class="dropdown-target" on:blur={onBlur} on:click={onClick}>
    <slot name="target" />
  </div>
  <div class={classes}>
    <slot />
  </div>
</div>
