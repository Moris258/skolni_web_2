<script lang="ts">
	import Document from '$lib/Document/Document.svelte';
	import { timePassed } from './relativeTime';
	import type { PageData } from './$types';
	import qr_code_img from "$lib/assets/qr_kod_Agenda.png";
	import { page } from '$app/stores';

	export let data: PageData;

	let display_qrcode_url = "/posts/czechia";

	const posts = data.posts
		.map((post) => ({ ...post, creation: new Date(post.creation) }))
		.sort((a, b) => Number(b.creation) - Number(a.creation));
</script>

<svelte:head>
	<title>Posts: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>


<!--Display QR-code only for Czechia posts.-->
{#if $page.url.pathname === display_qrcode_url}
	<div class="qr-code border">
		<p class="text-center py-2">
			The last LTTA within the ERASMUS + Be Eco, Be Digi, Be In Project will take place at our Josef Božek Gymnasium in Český Těšín from November 14 to 18.
			The project is implemented with the support of the EU.
			As coordinators of the entire project, we have prepared a rich program full of fun and learning for our partners from Lithuania, Italy, Romania and Portugal, and we hope that next week will be a perfect end to the three-year project.
			<br><br>
			The LTTA itinerary is available via the QR code below.
		</p>

		<img src={qr_code_img}
		alt="QR-CODE" class="w-45 rounded-sm mx-auto"/>
	</div>
{/if}


<div class="flex flex-col gap-4">
	{#each posts as { author, title, content, creation }}
		<div class="material w-full max-w-screen-md mx-auto" style="word-wrap: break-word; overflow: hidden;">
			<div>
				<div class="text-2xl <sm:text-xl font-semibold">{title}</div>
				<div class="text-gray-500">Post by {author.name}, uploaded {timePassed(creation)}</div>
			</div>

			<hr />

			<Document data={content.document} />
		</div>
	{/each}
</div>

{#if posts.length === 0}
	<p class="text-center py-2">No posts found</p>
{/if}


<style>
	.qr-code{
		@apply w-full flex-col mx-auto max-w-screen-md;
		font-size: 20px;
		background-color: rgba(241, 241, 241, 0.685);
		padding: 20px;
		margin-bottom: 10px;
	}
	div.border{
		border-color: grey;
		border-style: solid;
		border-radius: 5%;
		border-width: 3px;
	}
</style>