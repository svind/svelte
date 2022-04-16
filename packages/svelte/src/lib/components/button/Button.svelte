<script lang="ts">
  import clsx from "clsx";
  import type { Size, Variant } from "../../types";
  import { Icon } from "../icon";

  /**
   * button's color
   */
  export let variant: Variant = undefined;

  /**
   * size of button
   */
  export let size: Size = undefined;

  /**
   * type of button
   */
  export let type: "button" | "menu" | "submit" | "reset" = undefined;

  /**
   * render <a> instead of <button>
   */
  export let href: string = undefined;

  /**
   * related to grid (between 1 and 12)
   */
  export let col: string = undefined;

  /**
   * show only border
   */
  export let outline: boolean = false;

  /**
   * disabled state of button
   */
  export let disabled: boolean = undefined;

  /**
   * square shape with no border radius
   */
  export let square: boolean = false;

  /**
   * circle shape
   */
  export let circle: boolean = false;

  /**
   * TODO: width: 100%
   */
  export let block: boolean = false;

  /**
   * add more horizontal padding
   */
  export let wide: boolean = false;

  /**
   * show icon on left side of text
   */
  export let icon: string = "";

  $: classes = clsx("btn", {
    [`btn-${variant}`]: !outline && variant,
    [`btn-outline-${variant}`]: outline && variant,
    [`btn-${size}`]: size,
    [`col-${col}`]: col,
    "btn-disabled": disabled,
    "btn-square": square,
    "btn-circle": circle,
    "btn-block": block,
    "btn-wide": wide,
  });
</script>

{#if href}
  <a {type} {href} {disabled} on:click class={classes}>
    {#if icon}
      <Icon {icon} />
    {/if}
    <slot />
  </a>
{:else}
  <button {type} {disabled} on:click class={classes}>
    {#if icon}
      <Icon {icon} />
    {/if}
    <slot />
  </button>
{/if}
