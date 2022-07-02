<script lang="ts">
	import clsx from 'clsx';

	let className = '';
	export { className as class };

	export let target: string = undefined;

	let collapsed = true;

	function click() {
		const element = document.getElementById(target);

		console.log('click', element);
		if (element) {
			if (element.classList.contains('open')) {
				collapsed = true;
				element.classList.remove('open');
			} else {
				collapsed = false;
				element.classList.add('open');
			}
		}
	}

	$: classes = clsx('navbar-toggler', className);
</script>

<button on:click={click} class={classes} class:collapsed />
