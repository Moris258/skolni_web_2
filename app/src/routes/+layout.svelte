<script lang="ts">
	import 'virtual:windi.css';

	import { navigating } from '$app/stores';

	import Header from '$lib/Header.svelte';
	import Menu from '$lib/MenuAlt.svelte';
	import Loading from '$lib/Loading.svelte';
</script>

<div class="container mx-auto p-4 flex flex-col gap-8 min-h-screen">
	<Header />
	<Menu />

	<main class="px-8 flex-1">
		{#if $navigating}
			<Loading />
		{:else}
			<slot />
		{/if}
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

	:global(body) {
		font-family: 'Open Sans', sans-serif;
		font-size: 100%;
	}

	:global(h1) {
		@apply text-3xl font-semibold py-3;
	}

	:global(a) {
		@apply text-blue-600 underline underline-current;
		@apply hover:text-blue-800;
	}

	:global(hr) {
		@apply h-0.5 bg-gray-400 my-2;
	}

	:global(.material) {
		@apply bg-gray-100 p-6 rounded-md;
	}
</style>
