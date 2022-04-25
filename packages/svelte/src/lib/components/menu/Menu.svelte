<script lang="ts">
  import clsx from "clsx";
  export let compact: boolean = undefined;

  export let rounded: boolean = undefined;

  export let bordered: boolean = undefined;

  $: classes = clsx("menu", {
    compact,
    "menu-rounded": rounded,
    "menu-bordered": bordered,
  });
</script>

<ul class={classes}>
  <slot />
</ul>
