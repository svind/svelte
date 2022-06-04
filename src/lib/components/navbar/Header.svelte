<script lang="ts">
  import { Color } from "../../types";

  import clsx from "clsx";
  import { setContext } from "svelte";

  export let fixed = false;
  export let color: Color | "transparent" | "auto" = "auto";
  setContext("nav", true);

  $: classes = clsx("navbar-header", {
    "navbar-fixed": fixed,
    [`bg-${color}`]: color && color !== "transparent" && color !== "auto",
    [`bg-light dark:bg-dark`]: color === "auto",
  });
</script>

<header class={classes}>
  <slot />
</header>
