<script>
import clsx from "clsx";


    export let open = false;

    $: classes = clsx('modal', 'z-4', {open});
</script>

<div class={classes} on:click={() => open = false}>
    <slot/>

</div>
