<script>
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	$: classes = clsx('page-wrapper', className);
</script>

<div class={classes}>
	<slot />
</div>
