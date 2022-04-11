<script lang="ts">
  import clsx from "clsx";

  import type { Size } from "svind/types";
  import FormGroup from "./FormGroup.svelte";

  export let variant: string = undefined;
  export let name: string = undefined;
  export let size: Size = undefined;

  $: classes = clsx("form-control", {
    [`form-control-${variant}`]: variant,
    [`form-control-${size}`]: size,
  });
</script>

<FormGroup inline>
  <label class="label label-{size}">
    <input {name} type="radio" class={classes} />
    <slot />
  </label>
</FormGroup>
