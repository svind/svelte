<script>
  import { Button, Icon } from "svind";
  import ButtonList from "svind/components/button/ButtonList.svelte";
</script>

<h3>Default</h3>
<Button>Button</Button>

<h3>Outline</h3>
<Button variant="primary" outline>Outline</Button>

<h3>With Icon</h3>
<Button icon="la:user">User</Button>


<h3>Variants</h3>
<ButtonList>
  <Button variant="primary">Button</Button>
  <Button variant="secondary">Button</Button>
  <Button variant="success">Button</Button>
  <Button variant="info">Button</Button>
  <Button variant="error">Button</Button>
  <Button variant="warning">Button</Button>
  <Button variant="light">Button</Button>
  <Button variant="dark">Button</Button>
</ButtonList>

<h3>Outline variants</h3>
<ButtonList>
  <Button outline variant="primary">Button</Button>
  <Button outline variant="secondary">Button</Button>
  <Button outline variant="success">Button</Button>
  <Button outline variant="info">Button</Button>
  <Button outline variant="error">Button</Button>
  <Button outline variant="warning">Button</Button>
</ButtonList>

<h3>Button Sizes</h3>
<ButtonList>
  <Button variant="primary" size="xs">Button</Button>
  <Button variant="primary" size="sm">Button</Button>
  <Button variant="primary" size="md">Button</Button>
  <Button variant="primary" size="lg">Button</Button>
  <Button variant="primary" size="xl">Button</Button>
</ButtonList>

<h3>Outline Button sizes</h3>
<ButtonList>
  <Button variant="success" outline size="xs">Button</Button>
  <Button variant="success" outline size="sm">Button</Button>
  <Button variant="success" outline size="md">Button</Button>
  <Button variant="success" outline size="lg">Button</Button>
  <Button variant="success" outline size="xl">Button</Button>
</ButtonList>

<h3>Circle </h3>
<ButtonList>
  <Button circle><Icon icon="la:user" /></Button>
  <Button variant="primary" circle><Icon icon="la:user" /></Button>
  <Button variant="secondary" circle><Icon icon="la:user" /></Button>
  <Button variant="success" circle><Icon icon="la:user" /></Button>
  <Button outline variant="info" circle><Icon icon="la:user" /></Button>
  <Button outline variant="warning" circle><Icon icon="la:user" /></Button>
  <Button outline variant="error" circle><Icon icon="la:user" /></Button>
</ButtonList>

<h3>Circle Size </h3>
<ButtonList>
  <Button size="xs" circle><Icon icon="la:user" /></Button>
  <Button size="sm" variant="primary" circle><Icon icon="la:user" /></Button>
  <Button size="md" variant="secondary" circle><Icon icon="la:user" /></Button>
  <Button size="lg" outline variant="success" circle><Icon icon="la:user" /></Button>
  <Button size="xl" outline variant="info" circle><Icon icon="la:user" /></Button>
</ButtonList>

<h3>Square</h3>
<ButtonList>
  <Button square><Icon icon="la:user" /></Button>
  <Button variant="primary" square><Icon icon="la:user" /></Button>
  <Button variant="secondary" square><Icon icon="la:user" /></Button>
  <Button variant="success" square><Icon icon="la:user" /></Button>
  <Button outline variant="info" square><Icon icon="la:user" /></Button>
  <Button outline variant="warning" square><Icon icon="la:user" /></Button>
  <Button outline variant="error" square><Icon icon="la:user" /></Button>
</ButtonList>

<h3>Square Size</h3>
<ButtonList>
  <Button size="xs" square><Icon icon="la:user" /></Button>
  <Button size="sm" variant="primary" square><Icon icon="la:user" /></Button>
  <Button size="md" variant="secondary" square><Icon icon="la:user" /></Button>
  <Button size="lg" outline variant="success" square><Icon icon="la:user" /></Button>
  <Button size="xl" outline variant="info" square><Icon icon="la:user" /></Button>
</ButtonList>


<style>
  h3 {
    line-height: 2rem;
    margin-top: 3rem;
  }
</style>
