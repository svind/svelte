<script>
    import clsx from "clsx";

    let className = ''
    export {className as class}

    $: classes = clsx('card-body', className)
</script>
<div class={classes}>
    <slot/>
</div>