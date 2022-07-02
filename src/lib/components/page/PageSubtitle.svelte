<script>
import clsx from "clsx";


        let className = ''
    export {className as class}

    $: classes = clsx('page-subtitle', className);
</script>
<h4 class={classes}>
    <slot/>
</h4>