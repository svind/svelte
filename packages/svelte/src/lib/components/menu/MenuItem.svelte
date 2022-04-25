<script lang="ts">
  import clsx from "clsx";
import { getContext } from "svelte";

  export let active: boolean = undefined;
  export let disabled: boolean = undefined;
  export let href: string = undefined;

  $: classes = clsx('menu-item',{ active, disabled });
</script>

<li class={classes}>
    {#if href}
    <a {href}>
        <slot />
    </a>
    {:else}
    <slot/>
    {/if}
</li>
