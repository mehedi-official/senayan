<script lang="ts">
	let { image, heading, description } = $props();
</script>

<div class="card min-w-fit pt-10 pb-4 px-14 border-b border-r border-[#C0BCAD]">
	<div class="h-[28rem] border-2 border-white">
		<enhanced:img src={image} alt="" class="w-full h-full" />
	</div>

	<div
		class="w-fit overlay overflow-hidden grid gap-3 mx-auto -translate-y-1/2 bg-white py-3.5 px-8 text-center border-2"
	>
		<h4 class="text-lg/none tracking-tighter text-black">{heading}</h4>
		<p class=" font-medium text-xs/none text-[#848484]">{description}</p>
	</div>
</div>

<style>
	h4 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
