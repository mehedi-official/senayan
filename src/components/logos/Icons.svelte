<script lang="ts" module>
	export { noodles, time, star };
</script>

{#snippet noodles()}
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="32" height="32" fill="white" />
		<path d="M5.57031 5V18.5M9.07031 5V18.5M12.5703 4.5V18.5" stroke="black" stroke-width="1.4" />
		<path d="M5.5 5.5L29.5703 3" stroke="black" stroke-width="1.5" />
		<path d="M29.5703 9.5H5.57031" stroke="black" stroke-width="1.3" />
		<path
			d="M29.0713 18.5H3.07126V21C2.27126 22.2 8.40459 25.8333 11.5713 27.5V29.5H21.0713V27.5C22.2713 27.9 26.9046 23.3333 29.0713 21V18.5Z"
			stroke="black"
			stroke-width="1.5"
		/>
	</svg>
{/snippet}

{#snippet time()}
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="32" height="32" fill="white" />
		<path d="M3 10.5H8M8 16.5H1M8 23H3" stroke="black" stroke-width="1.5" />
		<path d="M20.5 11.5V17L25.5 20.5" stroke="black" stroke-width="1.5" />
		<rect
			x="10.25"
			y="5.75"
			width="20.5"
			height="20.5"
			rx="10.25"
			stroke="black"
			stroke-width="1.5"
		/>
	</svg>
{/snippet}

{#snippet star()}
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
			stroke="black"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}
