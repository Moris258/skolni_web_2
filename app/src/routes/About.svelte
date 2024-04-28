<script lang="ts">
	// @ts-ignore handled by vite...
	import ABOUT_IMAGE from '$lib/assets/project_logo.jpg?w=550';
</script>

<div class="flex flex-col-reverse items-center md:flex-row justify-center gap-4">
	<div class="material flex flex-col gap-2 justify-center lg:w-140 md:w-120">
		<h1>About the project</h1>
		<p>
			The essence of the project is to familiarize all groups of students and their teachers with
			ICT in the sciences and foreign languages teaching; link field education using IBSE and GIS;
			engage students in discovering the laws of nature and connecting information into a meaningful
			context; develop critical thinking, creativity and support their positive attitude to natural
			sciences.
		</p>
		<p>
			A strong emphasis on the applicability of acquired skills in practical life is to be achieved
			by cooperating with universities with their necessary equipment and knowledge and business
			companies to show students how close theory is to practice.
		</p>
	</div>

	<div class="flex-1 max-w-80 rounded-md">
		<img src={ABOUT_IMAGE} class="w-auto h-auto" alt="Logo of project" />
	</div>
</div>
