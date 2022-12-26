<script lang="ts">
  import { get_current_component, type ComponentProps } from "svelte/internal";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {}

  export let el: $$Props["el"];
</script>

<Base bind:el name="breadcrumb" tag="ol" component={get_current_component()}>
  <slot />
</Base>
