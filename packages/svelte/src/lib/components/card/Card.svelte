<script lang="ts">
import clsx from "clsx";


    export let z: string | number = undefined;

    let className = ''
    export {className as class};

    $: classes = clsx('card', {
        [`z-${z}`]: !!z
    }, className)
</script>
<div class={classes}>
    <slot/>
</div>