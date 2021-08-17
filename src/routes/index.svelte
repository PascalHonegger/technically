<script lang="ts" type="module">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('en', { replaceState: true });
	});
</script>
