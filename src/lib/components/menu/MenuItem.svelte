<script lang="ts">
	import clsx from 'clsx';
	import { getContext } from 'svelte';

	export let active: boolean = undefined;
	export let disabled: boolean = undefined;
	export let href: string = undefined;

	$: classes = clsx('menu-item', { active, disabled });
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
