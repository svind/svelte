<script>
import clsx from "clsx";
import { setContext } from "svelte";


    let className = ''
    export {className as class};

    setContext('head', true);

    $: classes = clsx(className)
</script>

<thead class={classes}>
    <slot/>
</thead>