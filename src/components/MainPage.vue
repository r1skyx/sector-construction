<template>
	<b-container class="h-100" fluid>
		<b-row class="b">
			<b-col
				cols="12"
				class="d-flex flex-column align-items-center text-center justify-content-center"
			>
				<div class="absolute-text">
					<h1>WELCOME TO SECTOR CONSTRUCTION</h1>
					<h3>“Masters of consistency and quality”</h3>
				</div>
				<video autoplay muted loop>
					<source src="../assets/Man-Working.mp4" type="video/mp4" />
				</video>
			</b-col>
		</b-row>
	</b-container>
</template>

<script></script>

<style scoped>
/* .welding {
	background-image: url("../assets/welding-1.jpg");
	width: 100%;
	height: 45rem;
	transition: all 3s;
}
.welding:hover {
	box-shadow: inset 0 0 0 1000px rgba(10, 62, 131, 0.2);
} */

.absolute-text {
	position: absolute;
	z-index: 1000;
	color: white;
}
h1 {
	z-index: 1000;
}

h3 {
	color: var(--light-blue);
}

.b {
	box-shadow: inset 0 0 0 1000px rgba(9, 40, 80, 0.301);
}

video {
	width: 100%;
}

.b {
	position: relative;
}
.b::after {
	content: "";
	position: absolute;
	min-width: 100%;
	min-height: 100%;
	background-color: rgba(59, 82, 131, 0.301);
	z-index: 100;
	left: 0;
	top: 0;
}
</style>
