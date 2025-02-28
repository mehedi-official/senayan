<script>
	import { leaves } from '@components/logos/Icons.svelte';
</script>

<section class="bg-[#EBE6DA] pt-16 pb-16 lg:pb-0">
	<h2 class="text-center text-[#E15E2C] text-[3.5rem]/none tracking-tight">
		We wholeheartedly serve <br /> each of our customers
	</h2>

	<section class="hidden lg:flex justify-between px-8 pt-6 pb-12 mx-2 mt-16 bg-white">
		{#each { length: 6 }}
			<div>{@render leaves('#E15E2C')}</div>
		{/each}
	</section>
</section>

<style>
	h2 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
