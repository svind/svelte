<script lang="ts">
import { Color } from "$lib/types";

  import clsx from "clsx";

  export let fixed = false;
  export let color: string = "light";

  $: classes = clsx("navbar-header", {
    "navbar-fixed": fixed,
  [`bg-${color}`]: color
  });
</script>

<header class={classes}>
  <slot />
</header>
