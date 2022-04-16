<script>
import { onMount } from "svelte";

    let el

    onMount(() => {
        const modals = document.querySelectorAll('[data-modal]');
        [...modals].map(modal => {
            el.appendChild(modal)
        })
    })
</script>
<div bind:this={el} class="page">
    <slot/>
</div>
