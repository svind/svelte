<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { get_current_component } from "svelte/internal";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {
    stacked: boolean;
  }

  export let el: $$Props["el"];
  export let stacked: $$Props["stacked"];

  $: classes = { stacked };
</script>

<Base
  bind:el
  name="avatar-group"
  component={get_current_component()}
  {classes}
  {...$$restProps}
>
  <slot />
</Base>
