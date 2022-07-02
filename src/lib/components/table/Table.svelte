<script>
import clsx from "clsx";


    export let compact = false;

    export let hover = false;

    export let striped = false;

    let className = ''
    export {className as class}


    $: classes = clsx(
        'table',
        {
            'table-compact': compact,
            'table-hover': hover,
            'table-striped': striped
        },
        className
    )
</script>
<div class="table-parent">

    <table class={classes}>
        <slot/>
    </table>
</div>