<script lang="ts">
  import { get_current_component, type ComponentProps } from "svelte/internal";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {
    href: string | undefined;
  }

  export let href: $$Props["href"] = undefined;

  export let el: $$Props["el"];
</script>

<Base bind:el name="breadcrumb" tag="li" component={get_current_component()}>
  {#if href}
    <a {href}><slot /></a>
  {:else}
    <slot />
  {/if}
</Base>
