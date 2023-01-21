<script lang="ts">
	import ABOUT_IMAGE from '$lib/assets/about-image.jpg';
</script>

<div class="flex flex-col-reverse md:flex-row justify-center gap-4">
	<div class="material flex flex-col justify-center max-w-xl">
		<h1>About the project</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi debitis iste officiis,
			voluptas voluptate rem! Hic quaerat autem alias voluptate nobis illo. Sequi ipsam, quae
			commodi vero sit facilis recusandae?
		</p>
	</div>

	<img src={ABOUT_IMAGE} class="md:max-h-60 rounded-md" alt="One of the events." />
</div>
