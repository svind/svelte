<script lang="ts">
  import clsx from "clsx";

  export let inline: boolean = false;
  export let col: string = undefined;

  $: classes = clsx("form-group", {
    [`col-${col}`]: !!col,
    [`col`]: !col || col === "auto",
    inline,
  });
</script>

<div class={classes}>
  <slot />
</div>
