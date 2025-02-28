<script>
	import { map_pin, phone } from '@components/logos/Icons.svelte';
	import { logo_black, sarirasa } from '@components/logos/Logos.svelte';
</script>

<footer>
	<section class="grid lg:grid-cols-2 border-y border-[#D9D9D9]">
		<section class="py-12 px-4 lg:px-12 flex flex-col gap-4">
			<div class="flex items-center gap-8">
				<div>{@render logo_black()}</div>
				<div>{@render sarirasa()}</div>
			</div>
			<a
				href="/"
				class="flex gap-3 max-w-80 font-normal hover:underline hover:text-black underline-offset-2 text-sm/normal text-[#696969] tracking-tight"
				><span class="pt-1">{@render map_pin(16, '#6A6A6A')}</span> Jl. Pantai Indah Kapuk, Kamal Muara,
				Penjaringan, 14460, Batavia PIK Pantai Maju/#09, Pantai Golf Island</a
			>
			<a
				href="/"
				class="flex gap-3 font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				><span>{@render phone()}</span> +6289 - 0080 - 4439</a
			>
		</section>

		<section
			class="grid grid-cols-2 gap-y-12 lg:flex py-12 px-4 lg:px-12 justify-between border-l border-[#D9D9D9]"
		>
			<ul class="grid gap-4">
				<h5 class=" font-semibold text-lg/none tracking-tighter text-black">Menu</h5>
				<li
					class=" font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Home</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">About Us</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Foods</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">News</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Location</a>
				</li>
			</ul>
			<ul class="grid gap-4">
				<h5 class=" font-semibold text-lg/none tracking-tighter text-black">Other</h5>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">FAQ</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Help Center</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Terms</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Security</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Chef</a>
				</li>
			</ul>
			<ul class="grid gap-4">
				<h5 class=" font-semibold text-lg/none tracking-tighter text-black">Services</h5>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Catering</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Private Events</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Delivery</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Takeaway</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Reservation</a>
				</li>
			</ul>
			<ul class="grid gap-4">
				<h5 class=" font-semibold text-lg/none tracking-tighter text-black">Resources</h5>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Blogs</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Tips</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Inspiration</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Nutrition</a>
				</li>
				<li
					class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>
					<a href="/">Cooking</a>
				</li>
			</ul>
		</section>
	</section>

	<section class="py-12 grid gap-6 lg:grid-cols-2">
		<div class="px-4 lg:px-12 flex items-center justify-between lg:justify-start gap-6">
			<a
				href="/"
				class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>Instagram</a
			>
			<a
				href="/"
				class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>Facebook</a
			>
			<a
				href="/"
				class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>Twitter (X)</a
			>
			<a
				href="/"
				class="font-normal hover:underline hover:text-black underline-offset-2 text-sm/none text-[#696969] tracking-tight"
				>Tiktok</a
			>
		</div>

		<div class="px-4 lg:px-12">
			<p class="font-normal text-sm/normal text-[#696969]">
				This website is created from dribbble shot. © {new Date().getFullYear()} All rights reserved
				by Sate Khas Senayan &
				<a
					href="https://dribbble.com/shots/25610176-Redesign-Indonesian-Restaurant-Landing-Page-Concept"
					target="_blank"
					class="text-black hover:text-[#E15E2C] font-medium underline underline-offset-2">Caraka</a
				>. Website developed by
				<a
					href="https://mehedi-agency.vercel.app/"
					target="_blank"
					class="text-black hover:text-[#E15E2C] font-medium underline underline-offset-2"
					>Mehedi Hasan</a
				>.
			</p>
		</div>
	</section>
</footer>
