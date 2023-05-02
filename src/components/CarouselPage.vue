<template>
	<div class="my-5 mx-auto text-center">
		<div class="d-flex flex-column align-items-start w-75 mx-auto">
			<h1>Gallery</h1>
			<p>We love to take pictures of our work and show them to the world.</p>
		</div>
		<b-container>
			<b-row class="mt-3 mx-auto">
				<b-col
					v-for="(item, i) in gallery"
					:key="i"
					lg="4"
					md="6"
					xs="12"
					class="mb-5 mx-auto"
				>
					<silent-box :image="item"> </silent-box>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			gallery: [
				{
					src: require("@/assets/carousel/1.jpg"),
					thumbnail: require("@/assets/carousel/1-thumbnail.jpg"),
					thumbnailWidth: "300px",
				},
				{
					src: require("@/assets/carousel/2.jpg"),
					thumbnail: require("@/assets/carousel/2-thumbnail.jpg"),
					thumbnailWidth: "300px",
				},
				{
					src: require("@/assets/carousel/3.jpg"),
					thumbnail: require("@/assets/carousel/3-thumbnail.jpg"),
					thumbnailWidth: "300px",
				},
				{
					src: require("@/assets/carousel/4.jpg"),
					thumbnail: require("@/assets/carousel/4-thumbnail.jpg"),
					thumbnailWidth: "300px",
				},
				{
					src: require("@/assets/carousel/5.jpg"),
					thumbnail: require("@/assets/carousel/5-thumbnail.jpg"),
					thumbnailWidth: "300px",
				},
			],
		};
	},
};
</script>

<style scoped>
* {
	color: #345673;
}

p {
	font-style: italic;
}
</style>
