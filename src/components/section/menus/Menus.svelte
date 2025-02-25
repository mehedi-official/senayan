<script>
	import Card from './Card.svelte';
</script>

<section class="bg-[#EBE6DA] text-[#E15E2C] pb-14">
	<section class="p-14 flex justify-between items-end">
		<div class="grid gap-6">
			<h3
				class="font-medium text-sm/none uppercase tracking-tight py-2.5 px-6 border rounded-full flex justify-center w-fit"
			>
				Menus
			</h3>
			<h2 class=" text-5xl/none">Discover our <br /> authentic foods</h2>
		</div>

		<select name="" id="" class="py-3 px-3 max-w-72 border font-medium text-sm/none tracking-tight">
			<option value="">Hidengan Special Sukasari</option>
		</select>
	</section>

	<section>
		<div class="card-container border-t border-[#C0BCAD] grid grid-cols-3">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>

		<div class="flex gap-6 items-center justify-center mt-8">
			<button class="flex items-center justify-center rounded-full w-12 h-12 border">←</button>

			<div class="flex">
				<span class="flex items-center justify-center rounded-full w-12 h-12">1</span>
				<span
					class="flex items-center justify-center rounded-full w-12 h-12 bg-[#EB5E22] text-white"
					>2</span
				>
				<span class="flex items-center justify-center rounded-full w-12 h-12">3</span>
				<span class="flex items-center justify-center rounded-full w-12 h-12">...</span>
				<span class="flex items-center justify-center rounded-full w-12 h-12">6</span>
			</div>

			<button class="flex items-center justify-center rounded-full w-12 h-12 border">→</button>
		</div>
	</section>
</section>

<style>
	h2 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
