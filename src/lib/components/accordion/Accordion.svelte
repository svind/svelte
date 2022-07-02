<script>
	import clsx from 'clsx';
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

	let className = '';
	export { className as class };

    export let stayOpen = false;

    const activeItems = writable([])

    setContext('accordion', {
        mount(id) {
            console.log('mount',id)
        },
        destroy(id) {
            console.log('destroy',id)
        },
        toggle(id) {
            if(stayOpen) {
                if($activeItems.includes(id)) {
                    $activeItems = $activeItems.filter(i => i !== id)
                } else {
                    $activeItems = [id, ...$activeItems]
                }
            } else {
                if($activeItems.length === 0 || $activeItems[0] !== id) {
                    activeItems.set([id])
                } else {
                    activeItems.set([])
                }
            }
        },
        activeItems
    })

	$: classes = clsx('accordion', className);
</script>

<div class={classes}>
	<slot />
</div>
