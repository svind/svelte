<script lang="ts">
import { Size } from "$lib/types";
import clsx from "clsx";


    export let src = undefined;

    export let initial = undefined

    export let size: Size = undefined;


    $: classes = clsx('avatar', {
        [`avatar-${size}`]: size
    }
</script>
<span class={classes} style="background-image: url({src})">
    {initial}
</span>