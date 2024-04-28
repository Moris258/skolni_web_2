<script lang="ts">
	import EU_LOGO from '$lib/assets/eu-logo.jpg';
</script>

<header>
	<a href="/" class="project-name">
		<h1 class="text-4xl">BE DIGI, BE ECO, BE IN</h1>
		<h2 class="text-lg">2021-1-CZ01-KA220-SCH-00027739</h2>
	</a>

	<img src={EU_LOGO} class="w-full max-w-md rounded-md" alt="Funded by EU logo" />
</header>

<style>
	header {
		@apply flex flex-wrap gap-8 justify-center items-center bg-blue-700 px-10 py-4 rounded-md;
		@apply lg:justify-between;
	}

	.project-name {
		@apply appearance-none text-white text-center no-underline;
		@apply hover:underline;
	}
</style>
