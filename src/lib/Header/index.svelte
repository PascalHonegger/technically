<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { onDestroy } from 'svelte';
	import { _, locale, locales } from 'svelte-i18n';
	import type { Page } from '@sveltejs/kit';

	let routes: { path: string; label: string }[] = [];

	const unsubscribeLocale = locale.subscribe((l) => {
		routes = [
			{ path: `${base}/${l}`, label: 'nav.routes.home' },
			{ path: `${base}/${l}/about`, label: 'nav.routes.about' }
		];
	});
	const unsubscribePage = page.subscribe((p) => {
		locale.set(extractLocale(p));
	});

	onDestroy(() => {
		unsubscribeLocale();
		unsubscribePage();
	});

	function extractLocale(page: Page) {
		return page.path.substr(base.length).split('/')[1] ?? 'en';
	}

	function replaceLocale(page: Page, newLocale: string) {
		const locale = extractLocale(page);
		const newPath = page.path.replace(locale, newLocale);
		const query = page.query.toString();
		return query ? `${newPath}?${query}` : newPath;
	}
</script>

<header
	class="flex flex-row justify-between place-items-center p-6 mb-6 xl:rounded-b-md w-full xl:max-w-6xl bg-white bg-opacity-95 shadow-md"
>
	<a href="{base}/" class="text-4xl font-serif font-semibold">Technically</a>
	<nav class="flex flex-row space-x-6">
		{#each routes as { path, label }}
			<a
				sveltekit:prefetch
				href={path}
				class="nav-link"
				class:active={$page.path === path.split('?')[0]}>{$_(label)}</a
			>
		{/each}
		<div class="border-r w-0 border-gray-600" />
		{#each $locales as localeOption}
			<a
				sveltekit:prefetch
				sveltekit:noscroll
				href={replaceLocale($page, localeOption)}
				class="nav-link"
				class:active={$locale === localeOption}>{$_(`language.${localeOption}`)}</a
			>
		{/each}
	</nav>
</header>

<style type="postcss">
	.nav-link {
		@apply border-4 border-transparent font-semibold p-2 rounded-md transition-colors;
	}

	.nav-link:hover {
		@apply no-underline border-gray-600;
	}

	.nav-link:not(.active) {
		@apply text-gray-600;
	}

	.active {
		@apply bg-gray-200;
	}
</style>
