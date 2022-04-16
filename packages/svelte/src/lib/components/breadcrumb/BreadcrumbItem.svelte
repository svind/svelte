<script lang="ts">
  export let href: string = undefined;
</script>

<li class="breadcrumb-item">
  {#if href}
    <a {href}><slot /></a>
  {:else}
    <slot />
  {/if}
</li>
