<script lang="ts">
import type { Size } from "svind/types";

  import { uuid } from "../../utils";

  import FormGroup from "./FormGroup.svelte";
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";

  let className = ''
    export {className as class}

  export let label: string = undefined;
  export let id: string = "form-group-" + uuid();
  export let size: Size = undefined
  export let col: string = "12"
  export let value: string;
</script>

<FormGroup {col} class={className}>
  {#if label}
    <Label {size} for={id}>{label}</Label>
  {/if}
  <Input {size} {id} bind:value {...$$restProps} />
</FormGroup>
