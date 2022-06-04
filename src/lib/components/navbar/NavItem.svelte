<script lang="ts">
  export let href: string = undefined;
  export let active: boolean = false;

  $: console.log(href);
</script>

<li on:click class="nav-item" class:active>
  {#if href}
    <a {href}>
      <slot />
    </a>
  {:else}
    <slot />
  {/if}
</li>
