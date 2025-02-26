<script lang="ts">
	import { arrow_down, globe } from '@components/logos/Icons.svelte';
	import { logo } from '@components/logos/Logos.svelte';
</script>

<nav class="grid grid-cols-2 border-b border-white/15 py-4 px-14">
	<ul class="flex gap-5 items-center text-sm/none font-medium text-white/60">
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 hover:-translate-y-1.5 text-white"
		>
			<a href="/">Home</a>
		</li>
		<li
			class=" flex h-full items-center hover:cursor-pointer transition-transform duration-250 hover:-translate-y-1.5"
		>
			<a href="/">About us</a>
		</li>
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 hover:-translate-y-1.5"
		>
			<a href="/">Foods</a>
		</li>
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 hover:-translate-y-1.5"
		>
			<a href="/">News</a>
		</li>
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 hover:-translate-y-1.5"
		>
			<a href="/">Location</a>
		</li>
	</ul>

	<div class="flex justify-between items-center">
		<div class=" -translate-x-1/2 w-52 h-11">{@render logo()}</div>

		<div class="flex gap-6 items-center">
			<a href="/" class="flex items-center gap-1"
				><span>{@render globe()}</span> EN <span>{@render arrow_down()}</span></a
			>
			<a
				href="/"
				class="text-sm/none font-medium uppercase bg-white/10 transition duration-200 hover:bg-white/20 border border-white/50 py-3 px-6 rounded-full"
				>Contact Us</a
			>
		</div>
	</div>
</nav>
