<script>
import { onMount } from "svelte";

    export let dark = false;

    let el

    onMount(() => {
        const modals = document.querySelectorAll('[data-modal]');
        [...modals].map(modal => {
            el.appendChild(modal)
        })
    })
</script>
<div bind:this={el} class="page bg-base" class:dark>
    <slot/>
</div>
