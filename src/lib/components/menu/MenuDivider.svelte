<script>
import clsx from "clsx";


        let className = ''
    export {className as class}

    $: classes = clsx('menu-divider', className);
</script>
<li class={classes}></li>