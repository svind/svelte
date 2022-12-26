<script lang="ts">
  import type { Size, Variant } from "../../types";
  import { Icon } from "../icon";
  import {
    get_current_component,
    type ComponentEvents,
    type ComponentProps,
  } from "svelte/internal";
  import Base from "../base/Base.svelte";
  import type { ButtonProps } from "./button.types";

  interface $$Props extends ButtonProps {}

  export let el: $$Props["el"],
    variant: $$Props["variant"] = undefined,
    size: $$Props["size"] = undefined,
    href: $$Props["href"] = undefined,
    col: $$Props["col"] = undefined,
    outline: $$Props["outline"] = false,
    disabled: $$Props["disabled"] = false,
    square: $$Props["square"] = false,
    circle: $$Props["circle"] = false,
    block: $$Props["block"] = false,
    ghost: $$Props["ghost"] = false,
    wide: $$Props["wide"] = false,
    icon: $$Props["icon"] = "",
    link: $$Props["link"] = false;

  $: classes = {
    variant,
    outline: outline && !ghost,
    ghost: ghost && !outline,
    size,
    col,
    disabled,
    square,
    circle,
    link,
    block,
    wide,
  };
</script>

<Base
  bind:el
  name="button"
  tag={href ? "a" : "button"}
  {classes}
  component={get_current_component()}
  {...$$restProps}
>
  {#if icon}
    <Icon {icon} />
  {/if}
  <slot />
</Base>
