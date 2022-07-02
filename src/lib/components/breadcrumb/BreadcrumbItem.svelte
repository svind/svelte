<script lang="ts">
import clsx from "clsx";


  export let href: string = undefined;

  let className = ''
  export {className as class}

  $: classes = clsx('breadcrumb-item', className);

</script>

<li class={classes}>
  {#if href}
    <a {href}><slot /></a>
  {:else}
    <slot />
  {/if}
</li>
