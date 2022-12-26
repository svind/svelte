<script lang="ts">
  import type { Color } from "../../types/index.js";

  import clsx from "clsx";
  import { setContext } from "svelte";

  let className = "";
  export { className as class };

  export let fixed = false;
  export let color: Color | "transparent" | "auto" = "auto";
  setContext("nav", true);

  $: classes = clsx(
    "navbar-header",
    {
      "navbar-fixed": fixed,
      [`bg-${color}`]: color && color !== "transparent" && color !== "auto",
      [`bg-light dark:bg-dark`]: color === "auto",
    },
    className
  );
</script>

<header class={classes}>
  <slot />
</header>
