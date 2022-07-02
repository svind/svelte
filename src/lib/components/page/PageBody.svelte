<script>
import clsx from "clsx";


	let className = '';
	export { className as class };

	$: classes = clsx('page-body', className);
</script>

<div class={classes}>
	<slot />
</div>
