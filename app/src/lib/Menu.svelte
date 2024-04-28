<script lang="ts">
	import { menuItems } from './menu-items';
	import { page } from '$app/stores';
</script>

<nav>
	{#each menuItems as [name, logo, postsLink, galleryLink], i}
		<div class="menu-item" style="z-index: {menuItems.length - i};">
			<img
				src={logo}
				class="menu-logo"
				class:active={$page.url.pathname === postsLink || $page.url.pathname === galleryLink}
				title={name}
				alt={name}
			/>

			<div class="dropdown-content">
				<a href={postsLink}>Posts</a>
				<a href={galleryLink}>Gallery</a>
			</div>
		</div>
	{/each}
</nav>

<style>
	nav {
		@apply flex flex-wrap justify-center gap-6 p-4 bg-gray-700 select-none rounded-md;
	}

	.menu-item {
		@apply relative;
		@apply transition-transform hover:(transform scale-110);
	}

	.menu-item:hover .dropdown-content {
		@apply block;
	}

	.menu-logo {
		@apply w-35 rounded-sm;
	}

	.menu-logo.active {
		@apply outline outline-4 outline-offset-4 outline-sky-600;
	}

	.dropdown-content {
		@apply hidden absolute bg-gray-100 w-full z-10;
	}

	.dropdown-content a {
		@apply block text-black text-center px-5 py-3 no-underline;
		@apply hover:bg-gray-300;
	}
</style>
