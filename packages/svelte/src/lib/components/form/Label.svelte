<script lang="ts">
  import clsx from "clsx";

  let fore;
  export { fore as for };
  export let size: string = undefined;

  $: classes = clsx("label", {
    [`label-${size}`]: size,
  });
</script>

<label for={fore} class={classes}>
  <slot />
</label>
