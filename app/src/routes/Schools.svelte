<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { schools } from './schools';

	let elements: HTMLElement[] = [];
</script>

<div class="material">
	<h1>Participating schools</h1>

	<div class="flex gap-4 p-2">
		{#each schools as [name, logo, website], i}
			<a
				href={website}
				class="flex-shrink-0"
				target="_blank"
				rel="noreferrer"
				bind:this={elements[i]}
			>
				<img src={logo} class="h-24 rounded-md" title={name} alt={name} />
			</a>
		{/each}
	</div>
</div>
