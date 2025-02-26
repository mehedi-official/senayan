<script lang="ts">
	import AboutUs from '@components/section/about-us/AboutUs.svelte';
	import Customer from '@components/section/customer/Customer.svelte';
	import Footer from '@components/section/footer/Footer.svelte';
	import Header from '@components/section/header/Header.svelte';
	import Menus from '@components/section/menus/Menus.svelte';
	import Restaurant from '@components/section/restaurant/Restaurant.svelte';
</script>

<Header />
<main>
	<AboutUs />
	<Menus />
	<Restaurant />
	<Customer />
</main>
<Footer />
