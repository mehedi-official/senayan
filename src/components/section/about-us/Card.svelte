<script lang="ts">
	let { index, icon, image, heading, description, label, title } = $props();
</script>

<div class="card w-fit bg-white" style="--index: {(index * 24) / 16}rem">
	<div class="p-4 grid gap-4">
		<div>{@render icon()}</div>

		<div class="grid gap-3">
			<h3 class=" capitalize text-2xl/none tracking-tight">{heading}</h3>
			<p class=" text-xs/relaxed font-normal text-[#848484]">{description}</p>
		</div>
	</div>

	<div class="p-2 h-96 relative">
		<enhanced:img src={image} alt="food 1" class="w-full h-full object-cover" />

		<div
			class="absolute w-full grid gap-3 left-1/2 bottom-9 -translate-x-1/2 text-center text-white"
		>
			<p class="text-base/none font-medium tracking-tight text-white/80">{label}</p>
			<h4 class="text-xl/none tracking-tight">{title}</h4>
		</div>
	</div>
</div>

<style>
	.card {
		margin-top: var(--index, 0px);
	}
	h3,
	h4 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
