<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';

	onMount(() => {
		locale.subscribe((l) => {
			goto(`${l}`);
		})();
	});
</script>
