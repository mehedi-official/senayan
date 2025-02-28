<script lang="ts">
	import Navbar from './Navbar.svelte';

	let today = $state(new Date());
</script>

<header class="header pb-8 text-white">
	<Navbar />
	<section class="pt-14">
		<h1 class="mx-4 lg:mx-14 text-[3.5rem] leading-none tracking-tight max-w-96">
			Authentic foods, where tradition meets craft
		</h1>

		<div class="px-4 lg:px-8 pt-40 grid lg:grid-cols-2 items-end">
			<div class="hidden lg:block">
				<div><img src="" alt="" />Hello</div>
				<div><img src="" alt="" /></div>
				<div><img src="" alt="" /></div>
			</div>

			<form action="" method="post" class="justify-self-end bg-white text-black w-fit">
				<header class="p-4 border-b border-[#DADADA]">
					<h2 class=" text-2xl/6 text-[#030303] tracking-tight">Booking a table</h2>
				</header>

				<main class="p-4 grid gap-3">
					<div class="grid gap-2">
						<label class=" text-sm/none font-normal tracking-tight" for="restaurant"
							>Restaurant</label
						>
						<div class="py-3 px-2 border grid gap-2 border-[#DADADA]">
							<p class="text-sm/none font-medium tracking-tight uppercase">
								Sate & Seafood Senayan Batavia Pik
							</p>
							<p class="text-[#636363] text-xs/none font-normal">
								Jl. Pantai Indah Kapuk, Kamal Muara, Penjaringan, 14460, Batavia
							</p>
						</div>
					</div>

					<div class="grid gap-2">
						<label class="text-sm/none font-normal tracking-tight" for="seat">Total Seat</label>
						<select
							class="py-3 px-2 border border-[#DADADA] text-sm/none font-medium tracking-tight"
							name="seat"
							id="seat"
						>
							<option value="1">1 Seat</option>
							<option value="2">2 Seat</option>
							<option value="3">3 Seat</option>
						</select>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div class="grid gap-2">
							<label class="text-sm/none font-normal tracking-tight" for="date">Date</label>
							<input
								class="py-3 px-2 appearance-none border border-[#DADADA] text-sm/none font-medium tracking-tight"
								type="date"
								name="date"
								id="date"
							/>
						</div>

						<div class="grid gap-2">
							<label class="text-sm/none font-normal tracking-tight" for="time">Time</label>
							<input
								class="py-3 px-2 border border-[#DADADA] text-sm/none font-medium tracking-tight"
								type="time"
								name="time"
								id="time"
							/>
						</div>
					</div>

					<button
						type="submit"
						class="bg-[#E95D21] hover:bg-[#CE3F02] flex py-4 text-white justify-center items-center hover:cursor-pointer text-sm/none font-semibold uppercase"
						>Reserve</button
					>
				</main>
			</form>
		</div>

		<div></div>
	</section>
</header>

<style>
	.header {
		background:
			linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
			url('https://tienda.customculinary.co/cdn/shop/articles/foto-kafta.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		/* background-position: center; */
	}
	h1,
	h2 {
		font-family: 'Garamond nova pro';
		font-weight: 300;
	}
</style>
