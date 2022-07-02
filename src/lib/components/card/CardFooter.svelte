<script lang="ts">
import clsx from "clsx";


    let className = ''
    export {className as class}

    export let position:"start"|"center"|"end" = "end";

    $: classes =clsx('card-footer', {
        [`justify-${position}`]: position
    }, className)
</script>

<div class={classes}>
    <slot/>
</div>