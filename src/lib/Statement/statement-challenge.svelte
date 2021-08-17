<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import StatementCode from './statement-code.svelte'
	import type { Statement, StatementSpecification } from '.';

	export let statement: Statement;

	$: specification = { ...statement.en, ...(statement[$locale as 'en' | 'de'] as StatementSpecification) };
</script>

<div>
	<h2>{specification.title}</h2>
	<!-- <p>{statement.language}</p> -->
	<p>{specification.statement}</p>
	<StatementCode code={specification.code} language={statement.language} />
</div>

<style type="postcss">
</style>
