<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Box from '$lib/Box/index.svelte';
</script>

<svelte:head>
	<title>{$_('technically.title')} - {$_('nav.routes.about')}</title>
</svelte:head>

<section class="max-w-4xl">
	<Box>
		<h1>{$_('about.what')} <b>{$_('technically.title')}</b>?</h1>

		<p>
			{$_('about.description')}
		</p>
	</Box>
	<Box>
		<h1>{$_('about.how')} <b>{$_('technically.title')}</b>?</h1>

		<ol class="list-decimal list-inside">
			<li>{$_('about.step1')}</li>
			<li>{$_('about.step2')}</li>
			<li>{$_('about.step3')}</li>
			<li>{$_('about.step4')}</li>
			<li>{$_('about.step5')}</li>
			<li>{$_('about.step6')}</li>
		</ol>
	</Box>
</section>
