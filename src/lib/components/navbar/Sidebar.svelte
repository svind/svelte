<script lang="ts">
import { Color } from "../../types";

    import clsx from "clsx";
import { uuid } from "../../utils";
import { setContext } from "svelte";
    
    export let expand: boolean | string = 'lg';

    export let id = 'sidebar-' + uuid()
  
    export let fixed = false;
    export let color: Color | "transparent" | "auto" = "auto";
    setContext('nav', true)
  
    $: classes = clsx("navbar-sidebar", {
      "navbar-fixed": fixed,
      [`bg-${color}`]: color && color !== 'transparent' && color !== "auto",
      "bg-light dark:bg-dark": color === "auto",
      "navbar-expand": expand === true,
      "sm:navbar-expand": expand === 'sm',
      "md:navbar-expand": expand === 'md',
      "lg:navbar-expand": expand === 'lg',
      "xl:navbar-expand": expand === 'xl',
    });
  </script>
  
  <aside {id} class={classes}>
    <slot />
  </aside>
  