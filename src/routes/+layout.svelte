<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import '@fontsource-variable/plus-jakarta-sans';
	import '../app.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

{@render children()}

<style>
	@font-face {
		font-family: 'Garamond nova pro';
		font-style: normal;
		font-display: swap;
		font-weight: 300;
		src: url('$lib/fonts/GaramondNova Regular.ttf');
	}

	@font-face {
		font-family: 'Garamond nova pro';
		font-style: normal;
		font-display: swap;
		font-weight: 400;
		src: url('$lib/fonts/GaramondNova Regular.ttf') format('ttf');
	}

	:global(body) {
		font-family: 'Plus Jakarta Sans Variable', sans-serif;
	}
</style>
