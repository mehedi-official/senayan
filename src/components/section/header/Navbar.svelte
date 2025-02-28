<script lang="ts">
	import { arrow_down, cross, globe, menu } from '@components/logos/Icons.svelte';
	import { logo } from '@components/logos/Logos.svelte';
	import { fly, slide } from 'svelte/transition';

	let isMenuOpen = $state(false);
</script>

<nav class="grid lg:grid-cols-2 border-b border-white/15 py-4 px-4 lg:px-14">
	<ul class="hidden lg:flex gap-5 items-center text-sm/none font-medium text-white/60">
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 text-white"
		>
			<a href="/">Home</a>
		</li>
		<li
			class=" flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
		>
			<a href="/">About us</a>
		</li>
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
		>
			<a href="/">Foods</a>
		</li>
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
		>
			<a href="/">News</a>
		</li>
		<li
			class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
		>
			<a href="/">Location</a>
		</li>
	</ul>

	<div class="flex justify-between items-center">
		<div class=" w-32 h-8 lg:-translate-x-1/2 lg:w-52 lg:h-11">{@render logo()}</div>

		<div class="hidden lg:flex gap-6 items-center">
			<a href="/" class="flex items-center gap-1"
				><span>{@render globe()}</span> EN <span>{@render arrow_down()}</span></a
			>
			<a
				href="/"
				class="text-sm/none font-medium uppercase bg-white/10 transition duration-200 hover:bg-white/20 border border-white/50 py-3 px-6 rounded-full"
				>Contact Us</a
			>
		</div>

		<button onclick={() => (isMenuOpen = true)} class=" lg:hidden">
			{@render menu()}
		</button>
	</div>
</nav>

{#if isMenuOpen}
	<section
		in:fly={{ x: '100%' }}
		out:fly={{ x: '100%', opacity: 1 }}
		class="grid gap-12 fixed top-0 left-0 w-full min-h-lvh z-50 py-16 px-6 bg-[#EBE6DA] text-[#E15E2C]"
	>
		<ul class="flex flex-col gap-12 text-4xl/none font-medium">
			<li
				class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5"
			>
				<a href="/">Home</a>
			</li>
			<li
				class=" flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
			>
				<a href="/">About us</a>
			</li>
			<li
				class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
			>
				<a href="/">Foods</a>
			</li>
			<li
				class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
			>
				<a href="/">News</a>
			</li>
			<li
				class="flex h-full items-center hover:cursor-pointer transition-transform duration-250 ease-out hover:-translate-y-1.5 hover:text-white"
			>
				<a href="/">Location</a>
			</li>
		</ul>

		<div class="">
			<a
				href="/"
				class="text-base/none flex justify-center w-full font-medium uppercase bg-[#E15E2C] text-[#EBE6DA] transition duration-200 py-5 px-6 rounded-full"
				>Contact Us</a
			>
		</div>

		<button onclick={() => (isMenuOpen = false)} class="text-black absolute top-6 right-6"
			>{@render cross()}</button
		>
	</section>
{/if}

<style>
	nav ul li::after {
		content: '';
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 100%;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		opacity: 0;
		transition: all 0.3s ease-out;
	}

	nav ul li:hover:after {
		opacity: 1;
	}
</style>
