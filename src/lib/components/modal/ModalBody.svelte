<script>
	import clsx from 'clsx';

	import { CardBody } from '../card';

	let className = '';
	export { className as class };

	export let col = 10;

	$: classes = clsx(
		'card',
		'bg-base',
		{
			[`col-${col}`]: !!col
		},
		className
	);
</script>

<div on:click|stopPropagation class={classes}>
	<CardBody>
		<slot />
	</CardBody>
</div>
