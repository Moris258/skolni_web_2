<script lang="ts">
    import { usefulLinks } from "./usefulLinks";
</script>

<div class="material">
	<h1 class="text-center py-4">Useful Links</h1>

	<div class="links-grid flex gap-4 p-2 flex-wrap justify-center">
		{#each usefulLinks as [name, logo, link]}
			<div class="links-grid-item">
				<a href={link} target="_blank" rel="noreferrer">
					<img src={logo} class="links-logo" title={name} alt={name} />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.links-grid {
		display: -moz-inline-grid;
		align-items: center;
	}

	.links-grid-item {
		@apply flex items-center h-full p-4 bg-white border border-gray-300 rounded-md;
		@apply transition-transform;
		@apply hover:(transform scale-110);
	}

	.links-logo {
		@apply h-auto max-h-40;
	}
</style>