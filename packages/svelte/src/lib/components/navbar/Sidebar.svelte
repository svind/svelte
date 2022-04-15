<script lang="ts">
    import clsx from "clsx";
import { uuid } from "../../utils";
    
    export let expand: boolean | string = 'lg';

    export let id = 'sidebar-' + uuid()
  
    export let fixed = false;
    export let color: "light" | "dark" | "transparent" = "light";
  
    $: classes = clsx("navbar-sidebar", {
      "navbar-fixed": fixed,
      "bg-light": color === "light",
      "bg-dark": color === "dark",
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
  