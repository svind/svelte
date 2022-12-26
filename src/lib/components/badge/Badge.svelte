<script lang="ts">
  import clsx from "clsx";
  import type { ComponentProps } from "svelte";
  import { get_current_component } from "svelte/internal";
  import type { Color, Size } from "../../types";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {
    color: Color;
    size: Size;
    ghost: boolean;
    outline: boolean;
    href: string | undefined;
  }

  export let el: $$Props["el"];
  export let color: $$Props["color"] = "blue";
  export let size: $$Props["size"] = undefined;
  export let ghost: $$Props["ghost"] = false;
  export let outline: $$Props["outline"] = false;
  export let href: $$Props["href"] = undefined;

  $: classes = {
    [`bg-${color}`]: !outline && !ghost && color,
    [`bg-${color}-lt`]: !outline && ghost && color,
    [`bg-${color}-outline`]: outline && !ghost && color,
    [`badge-${size}`]: size,
  };
</script>

<Base
  bind:el
  name="badge"
  tag={href ? "a" : "span"}
  component={get_current_component()}
  {href}
  {classes}
  {...$$restProps}
>
  <slot />
</Base>
