<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { schools } from './schools';

	let elements: HTMLElement[] = [];
</script>

<div class="material">
	<h1>Participating schools</h1>

	<div class="flex gap-4 p-2 flex-wrap justify-center">
		{#each schools as [name, logo, website], i}
			<a
				href={website}
				target="_blank"
				rel="noreferrer"
				bind:this={elements[i]}
			>
				<img src={logo} class="h-auto max-h-24 rounded-md" title={name} alt={name} />
			</a>
		{/each}
	</div>
</div>
