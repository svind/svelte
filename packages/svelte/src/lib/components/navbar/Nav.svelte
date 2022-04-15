<script>
    export let open = false;

$: console.log(open)
</script>
<ul class="nav" class:open>
    <slot/>
</ul>