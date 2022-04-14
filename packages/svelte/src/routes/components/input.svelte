<script>
import { Row } from "$lib";

  import { FormInput, Label } from "$lib/components/form";
  import Checkbox from "$lib/components/form/Checkbox.svelte";
  import FormGroup from "svind/components/form/FormGroup.svelte";
  import Radio from "svind/components/form/Radio.svelte";

  let name;
  $: console.log({name});
</script>

<h3>Simple</h3>
<FormInput label="name" placeholder="Enter your name..." bind:value={name} />

<h3>outline</h3>
<FormInput
  outline
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>

<h3>Variants</h3>
<div class="row">
  <FormInput
    inline
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
  <FormInput
    inline
    variant="primary"
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
  <FormInput
    variant="secondary"
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
  <FormInput
    variant="success"
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
  <FormInput
    variant="error"
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
  <FormInput
    variant="info"
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
  <FormInput
    variant="warning"
    label="name"
    placeholder="Enter your name..."
    bind:value={name}
  />
</div>

<h3>Outline Variants</h3>
<FormInput
  outline
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>
<FormInput
  outline
  variant="primary"
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>
<FormInput
  outline
  variant="secondary"
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>
<FormInput
  outline
  variant="success"
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>
<FormInput
  outline
  variant="error"
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>
<FormInput
  outline
  variant="info"
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>
<FormInput
  outline
  variant="warning"
  label="name"
  placeholder="Enter your name..."
  bind:value={name}
/>

<h3>Input size</h3>

<Row>

<FormInput col="6" size="xs" label="size-xs" variant="success" value="" placeholder=" size is xs.." />
<FormInput outline col="6" size="xs" label="size-xs" variant="success" value="" placeholder=" size is xs.." />
<FormInput col="6" size="sm" label="size-sm" variant="success" value="" placeholder=" size is sm.." />
<FormInput outline col="6" size="sm" label="size-sm" variant="success" value="" placeholder=" size is sm.." />
<FormInput col="6" size="md" label="size-md" variant="success" value="" placeholder=" size is md.." />
<FormInput outline col="6" size="md" label="size-md" variant="success" value="" placeholder=" size is md.." />
<FormInput col="6" size="lg" label="size-lg" variant="success" value="" placeholder=" size is lg.." />
<FormInput outline col="6" size="lg" label="size-lg" variant="success" value="" placeholder=" size is lg.." />
<FormInput col="6" size="xl" label="size-xl" variant="success" value="" placeholder=" size is xl.." />
<FormInput outline col="6" size="xl" label="size-xl" variant="success" value="" placeholder=" size is xl.." />
</Row>

<h3>Radio</h3>
<FormGroup>
  <input type="radio" class="form-control form-control-xs" name="some" />
  <input type="radio" class="form-control form-control-sm" name="some" />
  <input type="radio" class="form-control form-control-md" name="some" />
  <input type="radio" class="form-control form-control-lg" name="some" />
  <input type="radio" class="form-control form-control-xl" name="some" />
</FormGroup>

<h3>Radio variants</h3>
<FormGroup>
  <Radio name="name1" variant="primary">some</Radio>
  <Radio name="name1" variant="secondary">some</Radio>
  <Radio name="name1" variant="success">some</Radio>
  <Radio name="name3" variant="info">some</Radio>
  <Radio name="name3" variant="warning">some</Radio>
  <Radio name="name3" variant="error">some</Radio> 
</FormGroup>

<h3>Checkboxes</h3>
<FormGroup>
  <Checkbox size="xs">Some Checkbox</Checkbox>
  <Checkbox size="sm">Some Checkbox</Checkbox>
  <Checkbox size="md">Some Checkbox</Checkbox>
  <Checkbox size="lg">Some Checkbox</Checkbox>
  <Checkbox size="xl">Some Checkbox</Checkbox>
</FormGroup>

<h3>Checkbox variants</h3>
<FormGroup>
  <input type="checkbox" class="form-control form-control" name="some" />
  <input
    type="checkbox"
    class="form-control form-control-primary"
    name="some"
  />
  <input
    type="checkbox"
    class="form-control form-control-secondary"
    name="some"
  />
  <input
    type="checkbox"
    class="form-control form-control-success"
    name="some"
  />
  <input type="checkbox" class="form-control form-control-info" name="some" />
  <input
    type="checkbox"
    class="form-control form-control-warning"
    name="some"
  />
  <input type="checkbox" class="form-control form-control-error" name="some" />
</FormGroup>

<style>
  h3 {
    line-height: 2rem;
    margin-top: 3rem;
  }
</style>
