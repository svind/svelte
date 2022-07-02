<script lang="ts">
    import Icon from '@iconify/svelte';
import clsx from 'clsx';

    let className = ''
    export {className as class}


    export let icon: string = undefined;

    $: classes = clsx('icon', className)
</script>

<Icon class={classes} {icon} />
