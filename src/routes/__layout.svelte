<script context="module" lang="ts">
	import { addMessages, init, getLocaleFromPathname } from 'svelte-i18n';
	import '../app.postcss';
	import en from '../locales/en.json';
	import de from '../locales/de.json';
	addMessages('en', en);
	addMessages('de', de);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromPathname(/^\/(.*?)\//)
	});
</script>

<slot />
