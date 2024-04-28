<script lang="ts">
	import Document from '$lib/Document/Document.svelte';
	import { timePassed } from './relativeTime';
	import type { PageData } from './$types';

	export let data: PageData;

	const posts = data.posts
		.map((post) => ({ ...post, creation: new Date(post.creation) }))
		.sort((a, b) => Number(b.creation) - Number(a.creation));
</script>

<svelte:head>
	<title>Posts: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

<div class="flex flex-col gap-4">
	{#each posts as { author, title, content, creation }}
		<div class="material w-full max-w-screen-md mx-auto">
			<div>
				<div class="text-2xl <sm:text-xl font-semibold">{title}</div>
				<div class="text-gray-500">Post by {author.name}, uploaded {timePassed(creation)}</div>
			</div>

			<hr />

			<Document data={content.document} />
		</div>
	{/each}
</div>
