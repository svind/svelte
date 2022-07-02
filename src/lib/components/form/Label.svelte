<script lang="ts">
  import clsx from "clsx";

  let fore;
  export { fore as for };
  export let size: string = undefined;

  let className = ''
    export {className as class}


  $: classes = clsx("label", {
    [`label-${size}`]: size,
  }, className);
</script>

<label for={fore} class={classes}>
  <slot />
</label>
