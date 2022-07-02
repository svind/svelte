<script>
import clsx from "clsx";


        let className = ''
    export {className as class}

    $: classes = clsx('menu-title', className)
</script>
<li class={classes}>
    <slot/>
</li>