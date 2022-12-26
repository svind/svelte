<script lang="ts">
  import { get_current_component, type ComponentProps } from "svelte/internal";
  import Base from "../base/Base.svelte";

  interface $$Porps extends ComponentProps<Base> {}
  export let el: $$Porps["el"];
</script>

<Base
  bind:el
  name="button-list"
  component={get_current_component()}
  {...$$restProps}
>
  <slot />
</Base>
