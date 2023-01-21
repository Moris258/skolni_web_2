<script lang="ts">
	import { timePassed } from './relativeTime';
	import Document from '$lib/Document/Document.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.posts as { author, title, content, creation }}
	<div class="material max-w-screen-md mx-auto">
		<div class="flex justify-between items-center">
			<div class="text-2xl font-semibold">{title}</div>
			<div>{author.name}, {timePassed(creation)}</div>
		</div>

		<hr />

		<Document data={content.document} />
	</div>
{/each}
