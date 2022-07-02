<script>
	import clsx from 'clsx';
import { getContext, onDestroy, onMount } from 'svelte';
import { uuid } from '$lib/utils';
	import AccordionBody from './AccordionBody.svelte';

	let className = '';
	export { className as class };

    export let id = uuid();

	export let active = false;

	export let title = '';

    const {mount, destroy, toggle, activeItems} = getContext('accordion');

    onMount(() => {
        mount(id)
    })

    onDestroy(() => {
        destroy(id)
    })

    function onToggle() {
        toggle(id)
    }
    
    $: active = $activeItems.includes(id)
	$: classes = clsx('accordion-item', { active }, className);
</script>

<div class={classes}>
	<div on:click={onToggle} class="accordion-header" class:active>
		<slot name="header">
			<span>{title}</span>
		</slot>
	</div>
	<div class:hidden={!active}>
		<AccordionBody>
			<slot />
		</AccordionBody>
	</div>
</div>
