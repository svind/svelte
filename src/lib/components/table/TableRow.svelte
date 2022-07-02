<script>
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	$: classes = clsx(className);
</script>

<tr class={classes}>
	<slot />
</tr>
