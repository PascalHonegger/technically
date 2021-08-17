<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ page }) => ({
		props: {
			lang: page.params['lang']
		}
	});
</script>

<script lang="ts">
	import { _, locale } from 'svelte-i18n';

	export let lang: string;
	locale.set(lang);
</script>

<slot />
