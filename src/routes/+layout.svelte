<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import '@fontsource-variable/plus-jakarta-sans';
	import '../app.css';
	import {} from '$lib/fonts/garamond_nova_pro-light.otf';
	import {} from '$lib/fonts/garamond_nova_pro-regular.otf';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

{@render children()}

<style>
	@font-face {
		font-family: 'Garamond nova pro';
		font-style: normal;
		font-display: swap;
		font-weight: 300;
		src:
			local('Garamond nova pro'),
			local('Garamond-nova-pro'),
			url($lib/fonts/garamond_nova_pro-light.otf) format('otf');
	}

	@font-face {
		font-family: 'Garamond nova pro';
		font-style: normal;
		font-display: swap;
		font-weight: 400;
		src:
			local('Garamond nova pro'),
			local('Garamond-nova-pro'),
			url($lib/fonts/garamond_nova_pro-regular.otf) format('otf');
	}

	:global(body) {
		font-family: 'Plus Jakarta Sans Variable', sans-serif;
	}
</style>
