export default {
	props: {
		labname: String
	},
	data() {
		return {
			
		}
	},
	template: `
		<main>
			<section class="banner">
				<div class="banner-overlay">
					<h1>Our Services</h1>
				</div>
			</section>
			<section class="body-container flex-stack">
				<section id="project1">
					<div class="card text-center wrapper-horizontal">
						<h2 class="margin-bottom-40">Community Services</h2>
						<div class="flex-box">
							<div class="flex-250 flex-stack gap-20">
								<img class="img-center" src="./img/service-lecture.webp" width="200">
								<span class="width-200 service-title">Lectures and public talks<br>
									<small>(emotional education, socio-emotional development, empathy, psychological trauma)</small></span>
							</div>
							<div class="flex-250 flex-stack gap-20">
								<img class="img-center" src="./img/service-workshop.webp" width="200">
								<span class="width-200 service-title">Trainings and workshops<br>
								<small>(for mental health service providers)</small></span>
							</div>
							<div class="flex-250 flex-stack gap-20">
								<img class="img-center" src="./img/service-supervision.webp" width="200">
								<span class="width-200 service-title">Individual and group clinical supervision</span>
							</div>
						</div>
					</div>
				</section>
				<section id="project2" class="dark">
					<div class="card text-center wrapper-horizontal">
						<h2 class="margin-bottom-40">Research and Development Services</h2>
						<div class="flex-box">
							<div class="flex-250 flex-stack gap-20">
								<img class="img-center" src="./img/service-analysis.webp" width="200">
								<span class="width-200 service-title">Research project development and data analysis</span>
							</div>
							<div class="flex-250 flex-stack gap-20">
								<img class="img-center" src="./img/service-delivery.webp" width="200">
								<span class="width-200 service-title">Mental health service delivery model development</span>
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>`
}