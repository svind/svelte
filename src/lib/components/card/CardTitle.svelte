<script>
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	$: classes = clsx('card-title', className);
</script>

<h4 class={classes}>
	<slot />
</h4>
