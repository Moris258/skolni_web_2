<script lang="ts">
	import { schools } from './schools';
</script>

<div class="material">
	<h1 class="text-center py-4">Participating schools</h1>

	<div class="school-grid flex gap-4 p-2 flex-wrap justify-center">
		{#each schools as [name, logo, website, type]}
			<div class="{type} school-grid-item">
				<a href={website} target="_blank" rel="noreferrer">
					<img src={logo} class="school-logo" title={name} alt={name} />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.school-grid {
		display: grid;
		grid-template-columns: auto auto auto auto;
		align-items: center;
	}

	.school-grid-item {
		@apply flex items-center h-full p-4 bg-white border border-gray-300 rounded-md;
		@apply transition-transform;
		@apply hover:(transform scale-110);
	}

	.school-logo {
		@apply h-auto max-h-40;
	}

	.full-row {
		grid-column-start: 1;
		grid-column-end: 5;
	}
</style>
