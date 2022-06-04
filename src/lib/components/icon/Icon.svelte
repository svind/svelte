<script lang="ts">
    import Icon from '@iconify/svelte';

    export let icon: string = undefined;
</script>

<Icon class="icon" {icon} />
