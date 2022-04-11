
<h3>Component Library for svelte</h3>
built with scss


<h3>Install</h3>
<code>
  <pre class="z-3">
  npm i svind
  </pre>
</code>

<h3>Usage</h3>
<pre class="z-3">
{`<script>
  import { Button } from 'svind'

</script>

<Button>Hello World!</Button>

`}</pre>

<br>
<pre class="z-3">
{`<script>
  import { FormInput, Icon, Button } from 'svind'

  let name = 'world';

  function submit() {
    console.log(name)
  }
</script>

<FormInput bind:value={name} label="name"/>

<Button on:click={submit} variant="primary">
  <Icon icon="la:check"/>
  Submit  
</Button>

`}</pre>

<style lang="scss" global>
  pre {
    overflow-x: scroll;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #afafaf20 !important;
    background-color: #afafaf20 !important;
  }

  h3 {
    line-height: 2rem;
    margin-top: 1rem;
  }
</style>
