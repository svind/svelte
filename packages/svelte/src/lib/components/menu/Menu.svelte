<script lang="ts">
  import clsx from "clsx";

  $: classes = clsx("menu");
</script>

<ul class={classes}>
  <slot />
</ul>
