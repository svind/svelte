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

<style lang="scss" global>

.table-parent {
    overflow: auto;
}

.table {    
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;

    thead th {
        text-align: start;
        padding: 0.5rem 1rem;
        background-color: #dedede;
        border: 1px solid #cdcdcd;

        .dark & {
            background-color: #505050;
            border: 1px solid #606060;
        }
	}
    tbody tr td {
        padding: 0.5rem 1rem;
        
        border: 1px solid #dedede;
        
        .dark & {
            border-color: #505050;
        }
    }

    &.table-compact tbody tr td {
        padding: 0.25rem 1rem;
    }

  
    
    &.table-striped tbody tr:nth-child(even) td {
        background-color: #f3f3f3;
        
        .dark & {
            background-color: #404040;
            border-color: #606060;
        }
    }
    
    &.table-hover tbody tr:hover td {
        background-color: #00000020;
 
        .dark & {
            background-color: #ffffff30;
            // border-color: #606060;
        }
    }
}
	
</style>