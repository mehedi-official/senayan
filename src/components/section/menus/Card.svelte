<script lang="ts">
	import food from '$lib/images/food-1.jpg?enhanced';
</script>

<div class="card min-w-fit pt-10 pb-4 px-14 border-b border-r border-[#C0BCAD]">
	<div class="h-[28rem] border-2 border-white">
		<enhanced:img src={food} alt="" class="w-full h-full" />
	</div>

	<div class="w-fit grid gap-3 mx-auto -translate-y-1/2 bg-white py-3.5 px-8 text-center border-2">
		<h4 class="text-lg/none tracking-tighter text-black">Pepes Ayam Daun Pisang</h4>
		<p class=" font-medium text-xs/none text-[#848484]">Steamed chicken in banana leaf</p>
	</div>
</div>

<style>
	h4 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
