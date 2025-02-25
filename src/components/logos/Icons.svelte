<script lang="ts" module>
	export { noodles, time, star, leaves, map_pin };
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

{#snippet leaves(stroke: string = 'black')}
	<svg
		width="160"
		height="159"
		viewBox="0 0 160 159"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2.5 79.5C6.5 75.8333 17.5 68.5 29.5 68.5C44.5 68.5 56.5 76.5 58.5 79.5M2.5 79.5C4.83333 83.8333 13.5 92.3 29.5 91.5C45.5 90.7 55.5 83.1667 58.5 79.5M2.5 79.5H58.5"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M80 157C76.3333 153 69 142 69 130C69 115 77 103 80 101M80 157C84.3333 154.667 92.8 146 92 130C91.2 114 83.6667 104 80 101M80 157V101"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M80 58C76.3333 54 69 43 69 31C69 16 77 4 80 2M80 58C84.3333 55.6667 92.8 47 92 31C91.2 15 83.6667 5 80 2M80 58V2"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M102 80C106 76.3333 117 69 129 69C144 69 156 77 158 80M102 80C104.333 84.3333 113 92.8 129 92C145 91.2 155 83.6667 158 80M102 80H158"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M14.5 146C14.6667 136.667 18.4 115.4 32 105C49 92 65 89.5 70 89.5M14.5 146C26.5 146 47.5 140 59 124.5C68.2 112.1 70.1667 96 70 89.5M14.5 146L46.5 113.423L70 89.5"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M90 70.5C90.1667 61.1667 93.9 39.9 107.5 29.5C124.5 16.5 140.5 14 145.5 14M90 70.5C102 70.5 123 64.5 134.5 49C143.7 36.6 145.667 20.5 145.5 14M90 70.5L122 37.9234L145.5 14"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M146.5 145.509C137.167 145.343 115.9 141.609 105.5 128.009C92.5 111.009 90 95.0093 90 90.0093M146.5 145.509C146.5 133.509 140.5 112.509 125 101.009C112.6 91.8093 96.5 89.8426 90 90.0093M146.5 145.509L113.923 113.509L90 90.0093"
			{stroke}
			stroke-width="2.5"
		/>
		<path
			d="M71.5 69.5093C62.1667 69.3426 40.9 65.6093 30.5 52.0093C17.5 35.0093 15 19.0093 15 14.0093M71.5 69.5093C71.5 57.5093 65.5 36.5093 50 25.0093C37.6 15.8093 21.5 13.8426 15 14.0093M71.5 69.5093L38.9234 37.5093L15 14.0093"
			{stroke}
			stroke-width="2.5"
		/>
	</svg>
{/snippet}

{#snippet map_pin()}
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_9_36)">
			<path
				d="M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.0752 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.0752 14 6.6665Z"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_9_36">
				<rect width="16" height="16" fill="white" />
			</clipPath>
		</defs>
	</svg>
{/snippet}
