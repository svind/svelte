<script>
import clsx from "clsx";


    let className = ''
    export {className as class}

    $: classes = clsx('avatar-group', {
        'avatar-group-stacked': stacked,
    }, className)
    
</script>
<div class={classes}>
    <slot/>
</div>