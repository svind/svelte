<script lang="ts">
  import clsx from "clsx";

  let className = ''
    export {className as class}


  export let inline: boolean = false;
  export let col: string = undefined;

  $: classes = clsx("form-group", {
    [`col-${col}`]: !!col,
    [`col`]: !col || col === "auto",
    inline,
  }, className);
</script>

<div class={classes}>
  <slot />
</div>
