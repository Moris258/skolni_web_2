<script lang="ts">
	import About from './About.svelte';
	import Schools from './Schools.svelte';
</script>

<svelte:head>
	<title>About the project: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<About />
	<Schools />
</div>
