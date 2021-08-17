<script lang="ts">
	import Highlight from 'svelte-highlight';
	import javascript from 'svelte-highlight/src/languages/javascript';
	import typescript from 'svelte-highlight/src/languages/typescript';
	import { _ } from 'svelte-i18n';
	import type { ProgrammingLanguage } from '.';
	import phd from 'svelte-highlight/src/styles/phd';

	export let code: readonly string[];
	export let language: ProgrammingLanguage;

	const languageMap: Record<ProgrammingLanguage, any> = {
		javascript,
		typescript,
	};

	$: codeAsString = code.join('\n');
	$: programmingLanguage = languageMap[language];
</script>

<svelte:head>
	{@html phd}
</svelte:head>

<Highlight class="mt-6 p-6" language={programmingLanguage} code={codeAsString} />
