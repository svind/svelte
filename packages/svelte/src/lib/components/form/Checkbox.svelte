<script lang="ts">
  import clsx from "clsx";
  import type { Size } from "svind/types";
  import FormGroup from "./FormGroup.svelte";

  export let variant: string = undefined;
  export let size: Size = undefined;
  export let disabled: boolean = false;

  $: classes = clsx("checkbox", "form-control", {
    [`form-control-${size}`]: size,
    [`form-control-${variant}`]: variant,
  });

  $: labelClasses = clsx('label', {[`label-${size}`]: !!size})
</script>

<FormGroup inline>
  <label class={labelClasses}>
    <input {disabled} type="checkbox" class={classes} />
    <slot />
  </label>
</FormGroup>
