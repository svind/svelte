<script>
import clsx from "clsx";

import { onMount } from "svelte";

    export let dark = false;
    let className = ''
    export {className as class}


    let el

    onMount(() => {
        const modals = document.querySelectorAll('[data-modal]');
        [...modals].map(modal => {
            el.appendChild(modal)
        })
    })

    $: classes = clsx('page', 'bg-base', {dark}, className)
</script>
<div bind:this={el} class={classes}>
    <slot/>
</div>
