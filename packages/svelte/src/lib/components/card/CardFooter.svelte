<script lang="ts">
import clsx from "clsx";


    export let position:"start"|"center"|"end" = "end";

    $: classes =clsx('card-footer', {
        [`justify-${position}`]: position
    })
</script>

<div class={classes}>
    <slot/>
</div>