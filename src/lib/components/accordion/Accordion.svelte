<script lang="ts">
  import { setContext } from "svelte";
  import { get_current_component, type ComponentProps } from "svelte/internal";
  import { writable } from "svelte/store";
  import Base from "../base/Base.svelte";
  import type { AccordionContext } from "./accordion.types";

  interface $$Props extends ComponentProps<Base> {
    stayOpen?: boolean;
  }

  export let stayOpen: $$Props["stayOpen"] = false;

  const activeItems = writable<string[]>([]);

  setContext<AccordionContext>("accordion", {
    mount(id) {
      console.log("mount", id);
    },
    destroy(id) {
      console.log("destroy", id);
    },
    toggle(id) {
      if (stayOpen) {
        if ($activeItems.includes(id)) {
          $activeItems = $activeItems.filter((i) => i !== id);
        } else {
          $activeItems = [id, ...$activeItems];
        }
      } else {
        if ($activeItems.length === 0 || $activeItems[0] !== id) {
          activeItems.set([id]);
        } else {
          activeItems.set([]);
        }
      }
    },
    activeItems,
  });

  export let el = null;

  let classes = {};
</script>

<Base
  bind:el
  name="accordion"
  {classes}
  component={get_current_component()}
  {...$$restProps}
>
  <slot />
</Base>
