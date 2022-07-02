<script>
import clsx from "clsx";


        let className = ''
    export {className as class}

    $: classes = clsx('navbar-brand', className)
</script>
<div class={classes}>
    <slot/>
</div>
