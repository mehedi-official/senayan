<script>
	import { arrow_left, arrow_right, atom } from '@components/logos/Icons.svelte';
	import food_1 from '$lib/images/menu-1.avif?enhanced';
	import food_2 from '$lib/images/menu-2.avif?enhanced';
	import food_3 from '$lib/images/menu-3.avif?enhanced';
	import food_4 from '$lib/images/menu-4.avif?enhanced';
	import food_5 from '$lib/images/menu-5.jpg?enhanced';
	import food_6 from '$lib/images/menu-6.jpg?enhanced';
	import Card from './Card.svelte';

	let card_data = [
		{
			image: food_1,
			heading: 'Pepes Ayam Daun Pisang',
			description: 'Steamed chicken in banana leaf'
		},
		{ image: food_2, heading: 'Nasi Nanas Seafood', description: 'Pineapple rice with shrimp' },
		{
			image: food_3,
			heading: 'Nasi Ayam Sambal Matah',
			description: 'Grilled chicken with sambal matah'
		},
		{
			image: food_4,
			heading: 'Nasi Kuning Komplit',
			description: 'Turmeric rice with fried chicken'
		},
		{
			image: food_5,
			heading: 'Otak-Otak Bakar',
			description: 'Grilled fish cake with peanut sauce'
		},
		{ image: food_6, heading: 'Nasi Ayam Penyet', description: 'Crispy fried chicken with sambal' }
	];
</script>

<section class="bg-[#EBE6DA] text-[#E15E2C] pb-14">
	<section
		class="py-14 px-4 lg:px-14 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 lg:items-end"
	>
		<div class="grid gap-6">
			<h3
				class="font-medium text-sm/none uppercase tracking-tight py-2.5 px-4 border rounded-full flex gap-1.5 items-center justify-center w-fit"
			>
				<span>{@render atom('#E15E2C')}</span> Menus <span>{@render atom('#E15E2C')}</span>
			</h3>
			<h2 class=" text-5xl/none">Discover our <br /> authentic foods</h2>
		</div>

		<select
			name=""
			id=""
			class="py-3 px-3 lg:max-w-72 border font-medium text-sm/none tracking-tight"
		>
			<option value="">Hidengan Special Sukasari</option>
		</select>
	</section>

	<section>
		<div class="card-container border-t border-[#C0BCAD] grid lg:grid-cols-3">
			{#each card_data as data}
				<Card {...data} />
			{/each}
		</div>

		<div class="flex gap-4 lg:gap-6 items-center justify-center mt-8">
			<button class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12 border"
				>{@render arrow_left('#E15E2C')}</button
			>

			<div class="flex">
				<span class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12">1</span>
				<span
					class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12 bg-[#EB5E22] text-white"
					>2</span
				>
				<span class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12">3</span>
				<span class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12"
					>...</span
				>
				<span class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12">6</span>
			</div>

			<button class="flex items-center justify-center rounded-full w-9 h-9 lg:w-12 lg:h-12 border"
				>{@render arrow_right('#E15E2C')}</button
			>
		</div>
	</section>
</section>

<style>
	h2 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
