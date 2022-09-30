<template>
	<b-container fluid>
		<nav-bar></nav-bar>
		<main-page class="h-100" id="#"></main-page>
		<second-page></second-page>
		<services-page id="#services"></services-page>
		<carousel-page id="#gallery"></carousel-page>
		<h1 class="text-center">
			Still have questions? Contact us with the form below
		</h1>
		<div class="overflow-hidden form mx-auto h-75" id="#contact">
			<iframe
				class="overflow"
				src="https://share-eu1.hsforms.com/1eXqTb98_TMuvB8rS3hmMPAfn97r"
				frameborder="100"
			></iframe>
		</div>
		<div class="line mt-5"></div>
		<footer class="mt-5">
			<b-row>
				<b-col cols="6" class="p-5">
					<h2>Address</h2>
					<p>Shtime, Kosovo</p>
					<iframe
						class="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.163546023273!2d21.056519915715956!3d42.4455362376916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13537f9ede6ffaed%3A0x16d1af400d2cd6b2!2sAVAS!5e0!3m2!1sen!2sde!4v1664489059003!5m2!1sen!2sde"
						width="300"
						height="300"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</b-col>
				<b-col sm="12" md="6" class="p-5">
					<h2>Sector Construction Sh.P.K.</h2>
					<p>Fadil Rexhaj</p>
					<p>+383 49 780 912</p>
					<p>fadil.rexhaj@gmail.com</p>
				</b-col>
			</b-row>
		</footer>
	</b-container>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainPage from "./components/MainPage.vue";
import SecondPage from "./components/SecondPage.vue";
import ServicesPage from "./components/ServicesPage.vue";
import CarouselPage from "./components/CarouselPage.vue";
export default {
	name: "App",
	components: { NavBar, MainPage, SecondPage, ServicesPage, CarouselPage },
};
</script>

<style scoped>
.container-fluid {
	padding: 0 !important;
	margin: 0 !important;
	overflow-x: hidden;
}

.form {
	height: 100vh;
}
iframe {
	width: 100%;
	height: 650px;
	box-sizing: border-box;
}

h1,
h2 {
	color: black;
}

p {
	color: grey;
}

.line {
	width: 100vw;
	background-color: grey;
	height: 5px;
}

.map {
	max-height: 20rem;
}
</style>
