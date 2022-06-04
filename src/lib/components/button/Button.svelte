<script lang="ts">
  import clsx from "clsx";
  import type { Size, Variant } from "../../types";
  import { Icon } from "../icon";

  let className;
  export {className as class};
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
   * only show text of button
  */
  export let ghost: boolean = false;
  
  /**
   * add more horizontal padding
   */
  export let wide: boolean = false;

  /**
   * show icon on left side of text
   */
  export let icon: string = "";

  /**
   * show link style for button 
   */
  export let link: boolean = false

  $: classes = clsx("btn", {
    [`btn-${variant}`]: !!variant,
    [`btn-outline`]: outline && !ghost ,
    [`btn-ghost`]: ghost && !outline,
    [`btn-${size}`]: size,
    [`col-${col}`]: col,
    "btn-disabled": disabled,
    "btn-square": square,
    "btn-circle": circle,
    "btn-link": link,
    "btn-block": block,
    "btn-wide": wide,
  }, className);
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
