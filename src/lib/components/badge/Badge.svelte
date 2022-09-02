<script lang="ts">
	import clsx from 'clsx';
	import type { Color, Size } from '../../types';

	/**
	 * Color of badge
	 */
	export let color: Color = 'blue';

	let className = '';
	export { className as class };

	/**
	 * Size of badge
	 */
	export let size: Size = undefined;
	/**
	 * add transparency for background color
	 */
	export let soft: boolean = false;

	/**
	 * only draw a border
	 */
	export let outline: boolean = false;

	/**
	 * href to pass for <a> element
	 */
	export let href: string = undefined;

	$: classes = clsx(
		'badge',
		{
			[`bg-${color}`]: !outline && !soft && color,
			[`bg-${color}-lt`]: !outline && soft && color,
			[`bg-${color}-outline`]: outline && !soft && color,
			[`badge-${size}`]: size
		},
		className
	);
</script>
BADGE
{#if href}
	<a {href} class={classes}>
		<slot />
	</a>
{:else}
	<span class={classes}>
		<slot />
	</span>
{/if}
