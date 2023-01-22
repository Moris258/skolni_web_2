<script lang="ts">
	import { timePassed } from './relativeTime';
	import Document from '$lib/Document/Document.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Posts: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

<div class="flex flex-col gap-4">
	{#each data.posts.reverse() as { author, title, content, creation }}
		<div class="material w-full max-w-screen-md mx-auto">
			<div class="flex justify-between items-center">
				<div class="text-2xl font-semibold">{title}</div>
				<div>{author.name}, {timePassed(creation)}</div>
			</div>
	
			<hr />
	
			<Document data={content.document} />
		</div>
	{/each}
</div>
