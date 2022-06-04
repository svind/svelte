<script lang="ts">
  import clsx from "clsx";

  export let col: string = undefined;
  export let sm: string = undefined;
  export let md: string = undefined;
  export let lg: string = undefined;
  export let xl: string = undefined;
  // export let offset: string | number | Record<string, number | string> =
    // undefined;



  let className = "";
  export { className as class };

  $: classes = clsx(
  {
    [`col-${col}`]: col,
    [`sm:col-${sm}`]: sm,
    [`md:col-${md}`]: md,
    [`lg:col-${lg}`]: lg,
    [`xl:col-${xl}`]: xl,
  },
    className
  );
</script>

<div class={classes}>
  <slot />
</div>
