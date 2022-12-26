<script lang="ts">
  import { Icon } from "../icon/index.js";
  import { get_current_component } from "svelte/internal";
  import Base from "../base/Base.svelte";
  import type { ButtonProps } from "./button.types.js";

  type $$Props = ButtonProps;

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
