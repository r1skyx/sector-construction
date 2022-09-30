<template>
	<div class="my-5 mx-auto text-center">
		<div class="d-flex flex-column align-items-start w-75 mx-auto">
			<h1>Gallery</h1>
			<p>We love to take pictures of our work and show them to the world.</p>
		</div>

		<silent-box :gallery="gallery" class="mx-auto mt-5"> </silent-box>
	</div>
</template>

<script>
export default {
	data() {
		return {
			gallery: [
				{
					src: "https://scontent.fmuc4-1.fna.fbcdn.net/v/t39.30808-6/306745744_456943639792058_2387425871858922331_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kRU7ZG379HoAX80WTwE&_nc_ht=scontent.fmuc4-1.fna&oh=00_AT86F3rgGCdvXxUQmilOVPDzD_ALinoX1qnWD4UzuxpMOQ&oe=633A0E19",
					thumbnailWidth: "500px",
				},
				{
					src: "https://scontent.fmuc4-1.fna.fbcdn.net/v/t39.30808-6/305930712_450720583747697_4830301665886762849_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=6ScaNSwdj3IAX_BX6K1&_nc_ht=scontent.fmuc4-1.fna&oh=00_AT-7n6PkHNa4n8Kn7LT93jYFR07A9fWKfbBFvI1NWd8k9A&oe=633B0675",
					thumbnailWidth: "500px",
				},
				{
					src: "https://scontent.fmuc4-1.fna.fbcdn.net/v/t39.30808-6/304130998_446465824173173_8434552398055440013_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=USLAKSzXv7sAX9Y8r7G&_nc_ht=scontent.fmuc4-1.fna&oh=00_AT9IroFhYMeXtxEc0xY12jTrOiu2GOJ9WtD2o9yWvxXM9A&oe=633A315F",
					thumbnailWidth: "500px",
				},
				{
					src: "https://scontent.fmuc4-1.fna.fbcdn.net/v/t39.30808-6/299651334_436244618528627_1575753967729313884_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=QAIaRHDaIZEAX8h9nNn&_nc_ht=scontent.fmuc4-1.fna&oh=00_AT_zyxvo110mCz0hdvZLFhF1c05DDM5SyQxhoaVwLDRjMw&oe=633A8B13",
					thumbnailWidth: "500px",
				},
				{
					src: "https://scontent.fmuc4-1.fna.fbcdn.net/v/t39.30808-6/268807444_322594799717037_2711810281332811640_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hWxy11CPI-oAX-_gukG&tn=j1uxgP8eLjLBVWEk&_nc_ht=scontent.fmuc4-1.fna&oh=00_AT-NtbSxOnd9JGuhIIzegEiCrQk1WhlP2Nt4mWAgodsXzg&oe=633AD2AB",
					thumbnailWidth: "500px",
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
