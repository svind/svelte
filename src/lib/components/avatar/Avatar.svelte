<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { get_current_component } from "svelte/internal";
  import type { Size } from "../../types/size";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {
    src: string;
    size: Size;
  }

  export let el: $$Props["el"];

  export let src: $$Props["src"] = undefined;
  export let size: $$Props["size"] = undefined;

  $: classes = { size };
</script>

<Base
  bind:el
  name="avatar"
  tag="span"
  component={get_current_component()}
  {classes}
  style="background-image: url({src})"
  {...$$restProps}
>
  {#if $$slots["default"] && !src}
    <slot />
  {/if}
</Base>
