<template>
	<div>
		<b-row>
			<b-col>
				<h3 class="absolute">
					Leading company in meeting customer requirements, innovation,
					professionalism and superior quality solutions.
				</h3>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#345574"
						fill-opacity="1"
						d="M0,288L48,288C96,288,192,288,288,277.3C384,267,480,245,576,224C672,203,768,181,864,176C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</b-col>
		</b-row>
		<b-row>
			<b-col class="text-center">
				<h1 class="questionmark mb-4">?</h1>
				<div
					class="d-flex flex-column justify-content-center align-items-center grey text-center mx-auto"
				>
					<h2>What is SECTOR CONSTRUCTION?</h2>
					<h3 class="w-75 mt-5">
						Sector Construction is established on basement of quality and
						professional services. Our commitment is quality. SC is becoming an
						inegral part of Kosovo market providing professional services.
					</h3>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
};
</script>

<style scoped>
.icon {
	color: red;
	font-size: 20px;
}
h2 {
	color: #345673;
}
.absolute {
	position: absolute;
	padding-top: 2rem;
	margin-left: 15px;
	color: beige;
}

.grey {
	background-color: #abb9c6;
	height: 30rem;
}

.questionmark {
	margin: auto;
	width: 5rem;
	height: 5rem;
	color: #345673;
	border-radius: 50%;
	border: 0.5rem solid #345673;
}
</style>
