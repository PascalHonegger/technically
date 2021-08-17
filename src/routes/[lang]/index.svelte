<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { base } from '$app/paths';

	export const load: Load = async ({ fetch }) => {
		const statements = await fetch(`${base}/api/all-statements.json`).then((r) => r.json());
		return {
			props: { statements }
		};
	};
</script>

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Box from '$lib/Box/index.svelte';
	import StatementSummary from '$lib/Statement/statement-summary.svelte';
	import type { Statement } from '$lib/Statement';

	export let statements: Statement[];
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

	{#each statements as statement}
		<Box>
			<StatementSummary {statement} />
		</Box>
	{/each}
</section>
