<script lang="ts">
import clsx from "clsx";


    export let vertical = false;
    export let fixed = false;
    export let color: 'light' | 'dark' | 'transparent' = "light"

    $: classes = clsx('navbar', {
        'navbar-fixed': fixed,
        'navbar-vertical': vertical,
        'bg-light': color==='light',
        'bg-dark': color==='dark',
    })
</script>

<header class={classes}>
    <slot/>
</header>
