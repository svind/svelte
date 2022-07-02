<script>
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	$: classes = clsx('page-title', className);
</script>

<h2 class={classes}>
	<slot />
</h2>
