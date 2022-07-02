<script>
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	$: classes = clsx('breadcrumb', className);
</script>

<ol class={classes}>
	<slot />
</ol>
