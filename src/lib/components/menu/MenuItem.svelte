<script lang="ts">
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	let className = ''
    export {className as class}


	export let active: boolean = undefined;
	export let disabled: boolean = undefined;
	export let href: string = undefined;

	$: classes = clsx('menu-item', { active, disabled }, className);
</script>

{#if href}
	<li class={classes}>
		<a {href}>
			<slot />
		</a>
	</li>
{:else}
	<li class={classes}>
		<slot />
	</li>
{/if}
