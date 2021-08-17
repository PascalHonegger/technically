<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import { base } from '$app/paths';
	import type { Statement, StatementSpecification } from '.';

	export let statement: Statement;

	$: specification = { ...statement.en, ...(statement[$locale as 'en' | 'de'] as StatementSpecification) };
</script>

<div>
	<h2>{specification.title}</h2>
	<p>{statement.language}</p>
	<a href="{base}/{$locale}/statement/{statement.identifier}">{$_('statement.card.details')}</a>
</div>

<style type="postcss">
</style>
