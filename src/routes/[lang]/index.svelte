<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Box from '$lib/Box/index.svelte';
</script>

<svelte:head>
	<title>{$_('technically.title')}</title>
</svelte:head>

<section>
	<Box>
		<h1>
			{$_('home.welcome')}
		</h1>
	</Box>
</section>
