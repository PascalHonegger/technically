<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { base } from '$app/paths';
	import type { Statement } from '$lib/Statement';

	export const load: Load = async ({ fetch, page }) => {
		const url = `${base}/api/get-${page.params['statement']}.json`;
		const statement: Statement = await fetch(url).then((r) => r.json());
		return {
			props: { statement }
		};
	};
</script>

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Box from '$lib/Box/index.svelte';
	import StatementChallenge from '$lib/Statement/statement-challenge.svelte';

	export let statement: Statement;
</script>

<Box>
    <StatementChallenge {statement} />
</Box>

