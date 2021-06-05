<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Header from '$lib/Header/index.svelte';
	import Box from '$lib/Box/index.svelte';
</script>

<div class="flex flex-col h-full justify-between items-center">
	<Header />

	<main class="h-full px-6">
		<slot />
	</main>

	<footer class="flex flex-col items-center">
		<Box>
			{@html $_('footer.visit', {
				values: { url: 'https://github.com/PascalHonegger/technically' }
			})}
		</Box>
	</footer>
</div>
