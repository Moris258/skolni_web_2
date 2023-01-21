<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { schools } from './schools';

	let elements: HTMLElement[] = [];
</script>

<div class="material">
	<h1>Participating schools</h1>

	<div class="snap relative flex gap-4 py-2 overflow-auto">
		{#each schools as [name, logo, website], i}
			<a
				href={website}
				class="flex-shrink-0 snap-start"
				target="_blank"
				rel="noreferrer"
				bind:this={elements[i]}
			>
				<img src={logo} class="h-24 rounded-md" title={name} alt={name} />
			</a>
		{/each}
	</div>
</div>

<style>
	.snap {
		scroll-snap-type: x mandatory;
	}

	.snap-start {
		scroll-snap-align: start;
	}
</style>
