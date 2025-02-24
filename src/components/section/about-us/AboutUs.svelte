<script lang="ts">
	import { noodles, star, time } from '@components/logos/Icons.svelte';
	import food_1 from '$lib/images/food-1.jpg?enhanced';
	import food_2 from '$lib/images/food-2.jpg?enhanced';
	import food_3 from '$lib/images/food-3.jpg?enhanced';
	import bg_img from '$lib/images/about-us_background.jpg?enhanced';
	import Card from './Card.svelte';
	import { createImageSet } from '$lib';

	let card_data = [
		{
			icon: noodles,
			image: food_1,
			heading: 'Tradition meets innovation',
			description:
				'Sate Khas Senayan blends time-honored recipes with continuous research and innovation, delivering authentic Indonesian flavors that remain consistently delicious.',
			label: 'Top food plan',
			title: 'Paket Nasi Ayam Komplit'
		},
		{
			icon: time,
			image: food_2,
			heading: 'Authentic Taste, Timeless Appeal',
			description:
				"By refining traditional recipes through research and adaptation, Sate Khas Senayan ensures its flavors stay true to Indonesia's culinary heritage while evolving to meet modern tastes.",
			label: 'Top drinks',
			title: 'Fresh Lemon Tea Soda'
		},
		{
			icon: star,
			image: food_3,
			heading: 'Decade of Deliciousness',
			description:
				'Through constant innovation and a commitment to authenticity, Sate Khas Senayan has remained a beloved destination forIndonesian cuisine for generations.',
			label: 'Top cuisine',
			title: 'Nasi Bakar Peda'
		}
	];
</script>

<section class="p-14 grid grid-cols-[4fr_1fr]">
	<div class="grid grid-cols-[1fr_2fr]">
		<h2 class=" text-3xl/none font-normal tracking-tight">
			This is not just an <br /> ordinary restaurant
		</h2>
		<p class="text-base/relaxed text-black">
			Since 1974, Sate Khas Senayan has blended tradition and innovation to serve authentic
			Indonesian cuisine. Guided by "A Savory Cuisine of Timeless Tradition," we offer rich flavors,
			five-star service, and Indonesia's signature warmth for a truly memorable dining experience.
		</p>
	</div>

	<a
		href="/"
		class="justify-self-end flex h-fit text-base/none text-black font-medium py-3.5 px-5 border border-[#DADADA] transition-all duration-200 hover:bg-gray-100 rounded-full uppercase"
		>View History</a
	>
</section>

<section
	style="--background-image: {createImageSet(bg_img.sources)}"
	class="m-3 p-12 grid grid-cols-3 items-start gap-6 card-container"
>
	{#each card_data as data, i}
		<Card {...data} index={i}></Card>
	{/each}
</section>

<style>
	h2 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
	.card-container {
		background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), var(--background-image);
	}
</style>
