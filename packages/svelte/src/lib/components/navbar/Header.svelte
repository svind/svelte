<script lang="ts">
  import clsx from "clsx";

  export let fixed = false;
  export let color: "light" | "dark" | "transparent" = "light";

  $: classes = clsx("navbar-header", {
    "navbar-fixed": fixed,
    "bg-light": color === "light",
    "bg-dark": color === "dark",
  });
</script>

<header class={classes}>
  <slot />
</header>
