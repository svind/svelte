<script lang="ts">
  import { get_current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "$lib/utils/forwardEventsBuilder";
  import { classnames } from "$lib/utils/classnames";

  export let el: HTMLElement = null;

  export let name: string = "";

  export let tag: string = "div";

  let className: string = "";
  export { className as class };

  export let component = get_current_component();
  export let classes: Record<string, any> = {};

  export let id: string | undefined = undefined;

  const forwardEvents = forwardEventsBuilder(component);
</script>

<svelte:element
  this={tag}
  bind:this={el}
  {id}
  use:forwardEvents
  {...$$restProps}
  class={classnames(name, classes, className)}
>
  <slot />
</svelte:element>
