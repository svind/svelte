<script lang="ts">
  import clsx from "clsx";
  import { getContext, onDestroy, onMount, type ComponentProps } from "svelte";
  import { uuid } from "$lib/utils";
  import AccordionBody from "./AccordionBody.svelte";
  import Base from "../base/Base.svelte";

  interface $$Props extends ComponentProps<Base> {
    active: boolean;
    title: string;
  }

  export let el: $$Props["el"];

  export let id: $$Props["id"] = uuid();
  export let active: $$Props["active"] = false;
  export let title: $$Props["title"] = "";

  const { mount, destroy, toggle, activeItems } = getContext("accordion");

  onMount(() => {
    mount(id);
  });

  onDestroy(() => {
    destroy(id);
  });

  function onToggle() {
    toggle(id);
  }

  $: active = $activeItems.includes(id);
</script>

<Base bind:el name="accordion-item" classes={{ active }} {...$$restProps}>
  <div on:click={onToggle} class="accordion-header" class:active>
    <slot name="header">
      <span>{title}</span>
    </slot>
  </div>
  <div class:hidden={!active}>
    <AccordionBody>
      <slot />
    </AccordionBody>
  </div>
</Base>
