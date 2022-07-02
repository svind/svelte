<script lang="ts">
	import clsx from 'clsx';
	import type { Size } from 'svind/types';

	let className = '';
	export { className as class };

	export let id: string = undefined;
	export let value: string;
	export let size: Size = undefined;
	export let disabled: boolean = false;
	export let variant: string = undefined;
	export let outline: boolean = false;

	$: classes = clsx(
		'form-control',
		{
			[`form-control-${size}`]: size,
			[`form-control-${variant}`]: !outline && variant,
			[`form-control-outline-${variant}`]: outline && variant
		},
		className
	);
</script>

<input {id} {disabled} type="text" bind:value class={classes} {...$$restProps} />
