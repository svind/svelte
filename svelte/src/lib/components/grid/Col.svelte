<script lang="ts">
  import clsx from "clsx";

  export let col: string | number | Record<string, number | string> = 12;
  export let offset: string | number | Record<string, number | string> =
    undefined;



  let className = "";
  export { className as class };

  $: classes = clsx(
    {
    [`col-${col}`]: typeof col !== 'object',
      [`col-${col?.['xs']}`]: typeof col === 'object' && col.hasOwnProperty('xs'),
      [`sm:col-${col?.['sm']}`]: typeof col === 'object' && col.hasOwnProperty('sm'),
      [`md:col-${col?.['md']}`]: typeof col === 'object' && col.hasOwnProperty('md'),
      [`lg:col-${col?.['lg']}`]: typeof col === 'object' && col.hasOwnProperty('lg'),
      [`xl:col-${col?.['xl']}`]: typeof col === 'object' && col.hasOwnProperty('xl'),
    
    },
    {
      [`offset-${offset}`]: typeof offset !== 'object',
      [`offset-${offset?.['xs']}`]: typeof offset === 'object' && offset.hasOwnProperty('xs'),
      [`sm:offset-${offset?.['sm']}`]: typeof offset === 'object' && offset.hasOwnProperty('sm'),
      [`md:offset-${offset?.['md']}`]: typeof offset === 'object' && offset.hasOwnProperty('md'),
      [`lg:offset-${offset?.['lg']}`]: typeof offset === 'object' && offset.hasOwnProperty('lg'),
      [`xl:offset-${offset?.['xl']}`]: typeof offset === 'object' && offset.hasOwnProperty('xl'),
    },
    className
  );
</script>

<div class={classes}>
  <slot />
</div>
