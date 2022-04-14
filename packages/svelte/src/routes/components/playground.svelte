<script>
    import { Button, Badge, Icon } from "svind";
    import { Input } from "$lib/components/form";
  
    let checked = false;
  </script>
  
  
<div>Buttons</div>

<Button on:click={() => console.log("hello")}>Primary</Button>
<Button variant="secondary">secondary</Button>
<Button variant="info">info</Button>
<Button variant="success">success</Button>
<Button variant="warning">warning</Button>
<Button variant="error">Error</Button>
<Button variant="light">light</Button>
<Button variant="dark">dark</Button>

<div>Outline</div>
<Button outline>Primary</Button>
<Button outline variant="secondary">secondary</Button>
<Button outline variant="info">info</Button>
<Button outline variant="success">success</Button>
<Button outline variant="warning">warning</Button>
<Button outline variant="error">Error</Button>
<Button outline variant="light">light</Button>
<Button outline variant="dark">dark</Button>

<div>Disabled</div>
<Button disabled>Primary</Button>
<Button disabled variant="secondary">secondary</Button>
<Button disabled variant="info">info</Button>
<Button icon="la:user" disabled variant="success">success</Button>
<Button icon="la:user" disabled variant="warning">warning</Button>
<Button icon="la:user" disabled variant="error">Error</Button>
<Button icon="la:user" disabled variant="light">light</Button>
<Button disabled variant="dark">dark</Button>

<div>Outline + Disabled</div>
<Button outline disabled>Primary</Button>
<Button outline disabled variant="secondary">secondary</Button>
<Button outline disabled variant="info">info</Button>
<Button outline disabled variant="success">success</Button>
<Button outline disabled variant="warning">warning</Button>
<Button outline disabled variant="error">Error</Button>
<Button outline disabled variant="light">light</Button>
<Button outline disabled variant="dark">dark</Button>

<Button size="xs" variant="secondary">dark</Button>
<Button size="sm" variant="secondary">dark</Button>
<Button size="md" variant="secondary">dark</Button>
<Button size="lg" variant="secondary">dark</Button>
<Button size="xl" variant="secondary">dark</Button>
<Button outline disabled variant="dark">dark</Button>

<Button size="xl" block wide variant="dark">dark</Button>
<Button size="xl" block variant="dark">dark</Button>
<Button size="xl" wide variant="light">dark</Button>
<Button size="xl" block variant="light">dark</Button>

<div>Square</div>
<Button size="xs" square><Icon icon="tabler:package" /></Button>
<Button size="xs" square outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="sm" square><Icon icon="tabler:package" /></Button>
<Button size="sm" square outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="md" square><Icon icon="tabler:package" /></Button>
<Button size="md" square outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="lg" square><Icon icon="tabler:package" /></Button>
<Button size="lg" square outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="xl" square><Icon icon="tabler:package" /></Button>
<Button size="xl" square outline><Icon icon="tabler:package" /></Button>
<br />

<div>Circle</div>
<Button size="xs" circle><Icon icon="tabler:package" /></Button>
<Button size="xs" circle outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="sm" circle><Icon icon="tabler:package" /></Button>
<Button size="sm" circle outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="md" circle><Icon icon="tabler:package" /></Button>
<Button size="md" circle outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="lg" circle><Icon icon="tabler:package" /></Button>
<Button size="lg" circle outline><Icon icon="tabler:package" /></Button>
<br />
<Button size="xl" circle><Icon icon="tabler:package" /></Button>
<Button size="xl" circle outline><Icon icon="tabler:package" /></Button>
<br />

<div>Badge</div>
<Button variant="light">
  inside button
  <Badge color="red">12</Badge>
</Button>
<Badge outline color="light-blue">12</Badge>
<Badge outline soft color="light-blue">12</Badge>
<Badge color="blue">23</Badge>
<Badge soft color="blue">23</Badge>
<Badge color="amber">34</Badge>
<Badge soft color="amber">34</Badge>

<Badge size="xs" />
<Badge size="sm" />
<Badge size="md" />
<Badge size="lg" />
<Badge size="xl" />

<Badge outline>Outline</Badge>

<Badge soft>Soft</Badge>

<Badge soft color="lime" size="xs">XS</Badge>
<Badge soft color="lime" size="sm">SM</Badge>
<Badge soft color="lime" size="md">MD</Badge>
<Badge soft color="lime" size="lg">LG</Badge>
<Badge soft color="lime" size="xl">XL</Badge>

<h2>
  Heading
  <Badge>NEW</Badge>
</h2>
<h3>
  Heading
  <Badge>NEW</Badge>
</h3>
<h4>
  Heading
  <Badge>NEW</Badge>
</h4>
<h5>
  Heading
  <Badge>NEW</Badge>
</h5>

<button href="/" class="btn">
  Button
  <span class="badge">Test</span>
</button>

<Button><Icon icon="fa-solid:user" />Button</Button>
<Button><Icon icon="fa-solid:user" />Button</Button>
<Button><Icon icon="fa-solid:user" />Button</Button>
<Button><Icon icon="fa-solid:user" />Button</Button>
<Button><Icon icon="fa-solid:user" />Button</Button>
<Button><Icon icon="fa-solid:user" />Button</Button>
<Button><Icon icon="fa-solid:user" />Button</Button>

<Icon icon="fa-solid:user" />

<div>Form</div>

<div class="flex">
  <button class="btn mr-2 btn-xs">Button</button>
  <div class="form-control mb-2">
    <Icon icon="la:key" />
    <input placeholder="some text" />
  </div>
</div>
<div class="flex">
  <button class="btn mr-2 btn-sm">Button</button>
  <input class="form-control form-control-sm mb-2" placeholder="some text" />
</div>
<div class="flex">
  <button class="btn mr-2 btn-md">Button</button>
  <input class="form-control form-control-md mb-2" placeholder="some text" />
</div>
<div class="flex">
  <button class="btn mr-2 btn-lg">Button</button>
  <input class="form-control form-control-lg mb-2" placeholder="some text" />
</div>
<div class="flex">
  <button class="btn mr-2 btn-xl">Button</button>
  <input class="form-control form-control-xl mb-2" placeholder="some text" />
</div>

<form>
  <div class="form-group">
    <label class="label" for="name">Name</label>
    <input class="form-control form-control-primary" type="text" />
  </div>
  <div class="form-group">
    <label class="label" for="email">Email</label>
    <input class="form-control form-control-secondary" type="email" />
  </div>
  <div class="form-group">
    <label class="label" for="comp">Favorite CSS Compiler</label>
    <select class="form-control" id="comp">
      <option value="sass">Sass</option>
      <option value="less">Less</option>
      <option value="stylus">Stylus</option>
      <option value="postcss">PostCSS</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div>
    <fieldset>
      <legend>Are you familiar with CSS Grid?</legend>
      <input type="radio" name="grid" id="yes" value="yes" />
      <label for="yes">Yes</label>
      <input type="radio" name="grid" id="no" value="no" />
      <label for="no">No</label>
    </fieldset>
  </div>
  <div class="full-width">
    <label class="label" for="message">Message</label>
    <textarea class="form-control" id="message" />
  </div>
  {checked}
  <div class="full-width">
    <input bind:checked class="form-control" type="checkbox" id="newsletter" />
    <label class="label" for="newsletter">Receive our newsletter?</label>
  </div>
  <div class="full-width">
    <button class="btn btn-primary" type="submit">Send Response</button>
    <button class="btn" type="reset">Clear Form</button>
  </div>
</form>

<div>Input</div>

<div class="mb-2">
    <Input value="hello world" />
  </div>
  <div class="mb-2">
    <Input variant="primary" value="hello world" />
  </div>
  <div class="mb-2">
    <Input variant="secondadry" value="hello world" />
  </div>
  <div class="mb-2">
    <Input variant="success" value="hello world" />
  </div>
  <div class="mb-2">
    <Input variant="info" value="hello world" />
  </div>
  <div class="mb-2">
    <Input variant="warning" value="hello world" />
  </div>
  <div class="mb-2">
    <Input variant="error" value="hello world" />
  </div>
  
  <div class="mb-2">
    <Input size="xs" value="input" />
  </div>
  <div class="mb-2">
    <Input size="sm" value="input" />
  </div>
  <div class="mb-2">
    <Input size="md" value="input" />
  </div>
  <div class="mb-2">
    <Input size="lg" value="input" />
  </div>
  <div class="mb-2">
    <Input size="xl" value="input" />
  </div>
  
  <div>checkbox</div>
  <input name="some" type="checkbox" class="form-control" />
  <input name="some" type="checkbox" class="form-control" />
  <input name="some" type="checkbox" class="form-control" />
  
  <div>Radio</div>
  <input name="some" type="radio" class="form-control" />
  <input name="some" type="radio" class="form-control" />
  <input name="some" type="radio" class="form-control" />