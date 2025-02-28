<script lang="ts">
	import { createImageSet } from '$lib';
	import restaurant from '$lib/images/about-us_background.jpg?enhanced';
	import { arrow_left, arrow_right, leaves, map_pin } from '@components/logos/Icons.svelte';
</script>

<section class="grid gap-12 lg:gap-0 lg:grid-cols-2 bg-white">
	<section class=" py-15 px-4 lg:px-15">
		<section>
			<div class="border border-[#D9D9D9] w-full lg:w-fit">
				<div class="py-6 pl-5 pr-7 grid gap-12 w-full lg:w-fit border-b border-[#D9D9D9]">
					<p class=" text-base/none font-medium tracking-tight">Weekdays ( Monday until Friday )</p>

					<div class="grid gap-4">
						<h3 class=" text-[2.5rem]/none text-black">9:30 - 22:00</h3>
						<p class="garamond italic text-[2rem]/none text-[#848484]">(20:00 Last Order)</p>
					</div>
				</div>

				<div class="py-6 pl-5 pr-7 grid gap-12 w-fit">
					<p class=" text-base/none font-medium tracking-tight">Weekend ( Saturday & Sunday )</p>

					<div class="grid gap-4">
						<h3 class=" text-[2.5rem]/none text-black">10:30 - 23:00</h3>
						<p class="garamond italic text-[2rem]/none text-[#848484]">(21:00 Last Order)</p>
					</div>
				</div>
			</div>
		</section>

		<article class="grid gap-4 mt-18 lg:mt-36">
			<h2 class="text-4xl/snug lg:text-5xl/snug tracking-tighter">
				SATE & SEAFOOD SENAYAN BATAVIA PIK
			</h2>
			<p class="text-sm/normal font-medium text-[#848484]">
				Located in Batavia PIK Pantai Maju, Sate Khas Senayan offers authentic Indonesian cuisine in
				a relaxing seaside setting. Close to various attractions in PIK, it's the perfect spot for a
				casual meal.
			</p>

			<div class="inline-flex gap-3">
				<a
					href="/"
					class=" py-3 px-5 flex gap-2 items-center font-medium rounded-full bg-[#E95D21] hover:bg-[#CE3F02] text-white text-sm/none uppercase"
				>
					<span>{@render map_pin()}</span>VIEW ON MAP</a
				>
				<a
					href="/"
					class="py-3 px-5 hover:bg-gray-50 font-medium border border-[#E0E0E0] rounded-full text-black text-sm/none uppercase"
					>VIEW ALL</a
				>
			</div>
		</article>
	</section>

	<section
		style="--background-image: {createImageSet(restaurant.sources)}"
		class="lg:m-3 lg:ml-0 h-132 lg:h-auto background relative"
	>
		<!-- leaves -->
		<div
			class=" mix-blend-difference absolute left-1/2 lg:left-0 lg:top-1/2 -translate-y-1/2 -translate-x-1/2"
		>
			{@render leaves()}
		</div>

		<section class=" absolute left-0 bottom-8 w-full">
			<!-- restaurant card -->
			<div class="flex justify-center px-4 lg:px-0">
				<div class="p-2 bg-white max-w-100 grid grid-cols-[1.2fr_0.8fr]">
					<div class="grid gap-7">
						<div class="grid gap-3">
							<h4 class="text-sm/normal uppercase font-medium text-black">
								SATE & SEAFOOD SENAYAN BATAVIA PIK
							</h4>
							<p class="text-xs/normal pr-4 font-medium text-[#696969]">
								JL Pantai Indah Kapuk, Kamal Muara, Penjaringan, 14460, Batavia PIK Pantai Maju /
								#09, Pantai Golf Island
							</p>
						</div>
						<p class="text-xs/normal font-medium text-[#E95D21]">+6289 - 0080 - 4439</p>
					</div>
					<div><enhanced:img src={restaurant} class="w-full h-full" /></div>
				</div>
			</div>

			<!-- slider control -->
			<div class="flex justify-between px-8 pt-7">
				<button
					class="flex text-white items-center justify-center rounded-full w-12 h-12 bg-white/20 border-white border"
					>{@render arrow_left('white')}</button
				>

				<!-- indicator -->
				<div class="flex items-center gap-1">
					<span class="w-[2px] rounded-full h-3 bg-white/50 inline-flex"></span>
					<span class="w-[2px] rounded-full h-3 bg-white/50 inline-flex"></span>
					<span class="w-[2px] rounded-full h-3 bg-white/50 inline-flex"></span>
					<span class="active w-[2px] rounded-full h-6 bg-white inline-flex"></span>
					<span class="w-[2px] rounded-full h-3 bg-white/50 inline-flex"></span>
					<span class="w-[2px] rounded-full h-3 bg-white/50 inline-flex"></span>
					<span class="w-[2px] rounded-full h-3 bg-white/50 inline-flex"></span>
				</div>

				<button
					class="flex text-white items-center justify-center rounded-full w-12 h-12 bg-white/20 border-white border"
					>{@render arrow_right('white')}</button
				>
			</div>
		</section>
	</section>
</section>

<style>
	h3,
	.garamond,
	h2 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
	.background {
		background: var(--background-image);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
