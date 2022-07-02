<script>
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	$: classes = clsx(className);
</script>

<tbody class={classes}>
	<slot />
</tbody>
