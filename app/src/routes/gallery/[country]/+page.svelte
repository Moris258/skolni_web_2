<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let activeImage: string | undefined = undefined;
</script>

<svelte:head>
	<title>Gallery: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

{#if activeImage}
	<div class="fixed flex flex-col inset-0 z-10 p-4 bg-black/85">
		<div class="w-full flex justify-end px-12 py-2" on:click={() => (activeImage = undefined)}>
			<span class="text-6xl text-white cursor-default hover:text-red-300">×</span>
		</div>
		<img src={activeImage} class="w-full h-full object-contain" alt="" />
	</div>
{/if}

{#each data.galleries as { images, name }}
	<div class="material">
		<div class="text-3xl <md:text-2xl text-center font-semibold py-4">{name}</div>

		<div class="images py-2 py-2">
			{#each images as { photo }}
				<img src={photo.url} class="preview" on:click={() => (activeImage = photo.url)} alt="" />
			{/each}
		</div>
	</div>
{/each}

<style>
	.images {
		display: grid;
		grid-template-columns: repeat(auto-fill, min(100%, 20rem));
		justify-content: center;
	}

	img.preview {
		@apply bg-gray-300/50 object-contain p-2 rounded-md;
		@apply transition-transform hover:(transform scale-110);

		cursor: zoom-in;
	}
</style>
