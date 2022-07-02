<script lang="ts">
  import clsx from "clsx";
  import { Size } from "../../types/size";

  let className = ''
    export {className as class}


  export let src = undefined;

  export let text: string = undefined;

  export let size: Size = undefined;

  $: classes = clsx("avatar", {
    [`avatar-${size}`]: size,
  }, className);
</script>

<span class={classes} style="background-image: url({src})">
  {#if text && !src}
    {text}
  {/if}
</span>
