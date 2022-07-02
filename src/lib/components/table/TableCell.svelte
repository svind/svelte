<script>
	import clsx from 'clsx';
	import { getContext } from 'svelte';

	let className = '';
	export { className as class };

	const head = getContext('head');

	$: classes = clsx(className);
</script>

{#if head}
	<th class={classes}>
		<slot />
	</th>
{:else}
	<td class={classes}>
		<slot />
	</td>
{/if}
