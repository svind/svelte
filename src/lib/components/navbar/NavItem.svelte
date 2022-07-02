<script lang="ts">
import clsx from "clsx";


  export let href: string = undefined;
  export let active: boolean = false;
  let className = ''
    export {className as class}


  $: classes = clsx('nav-item',{active}, className);
</script>

<li on:click class={classes}>
  {#if href}
    <a {href}>
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</li>
