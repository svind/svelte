<script lang="ts">
  import { get_current_component, type ComponentProps } from "svelte/internal";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {}

  export let el: $$Props["el"];
  let classes = {};
</script>

<Base
  bind:el
  tag="div"
  name="accordion-body"
  component={get_current_component()}
  {classes}
  {...$$restProps}
>
  <slot />
</Base>
