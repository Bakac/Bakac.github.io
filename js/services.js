import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
	created () {
		document.title = 'Our Services | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
	mounted () {
		let slide = this.$refs.slide.splide.Components.Slides.getAt(0).slide;
	    let newHeight = slide.querySelector(".slide-container").scrollHeight;
	    slide.parentElement.style.height = newHeight + 'px';
	},
	data() {
		return {
			
		}
	},
	methods: {
	    goSlide(n) {
	      this.$refs.slide.splide.go(n-1);
	      this.$refs.container.scrollIntoView({ behavior: 'smooth' });

	      let slide = this.$refs.slide.splide.Components.Slides.getAt(n-1).slide;
	      let newHeight = slide.querySelector(".slide-container").scrollHeight;

	      slide.parentElement.style.height = newHeight + 'px';
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
					<section class="card margin-top-0 wrapper-horizontal">
						<div class="flex-box gap-64">
							<div class="flex-60">
								<span>We provide services to mental health professionals and the public to learn more about stress, relationships, and mental illness. Based on our clinical and scientific work on traumatic stress and adverse childhood experience, we offer training and consultation work on pertinent issues, including individual mental well-being concerns, clinician specialty training, and institutional service development.</span>
							</div>
							<div class="flex-40">
								<h2>Topics</h2>
								<ul>
									<li>Early life experience and psychological trauma</li>
									<li>Stress-related mental disorders</li>
									<li>Psychological intervention for unresolved traumatic stress</li>
									<li>Empathy and self-compassion</li>
									<li>The making of therapeutic relationship</li>
								</ul>
							</div>
						</div>
					</section>

					<section style="scroll-margin-top: 96px;" ref="container" class="dark">
						<div class="card wrapper-horizontal">
							<splide ref="slide" :options="{ type: 'slide', speed: 1500, autoHeight: true, arrows: false, pagination: false, drag: false, autoplay: false, lazyLoad: 'sequential', updateOnMove: true }" aria-label="Services">
								<splide-slide>
									<div class="slide-container">
										<h2>Activities</h2>

										<div class="flex-box margin-top-64">
											<div class="flex-200 flex-stack gap-20">
												<img class="img-center" src="./img/service-workshop.webp" width="150" height="150">
												<span class="width-200 service-title">
													Clinical training workshop<br>
													<small><a href="./?page=services" @click.prevent="goSlide(2)">Content →</a></small>
												</span>
											</div>

											<div class="flex-200 flex-stack gap-20">
												<img class="img-center" src="./img/service-supervision.webp" width="150" height="150">
												<span class="width-200 service-title">Individual/group clinical supervision</span>
											</div>

											<div class="flex-200 flex-stack gap-20">
												<img class="img-center" src="./img/service-consult.webp" width="150" height="150">
												<span class="width-200 service-title">Case consultation</span>
											</div>
										</div>

										<div class="flex-box margin-top-32">
											<div class="flex-200 flex-stack gap-20">
												<img class="img-center" src="./img/service-delivery.webp" width="150" height="150">
												<span class="width-200 service-title">Service evaluation and development</span>
											</div>

											<div class="flex-200 flex-stack gap-20">
												<img class="img-center" src="./img/service-lecture.webp" width="150" height="150">
												<span class="width-200 service-title">Public lecture</span>
											</div>
										</div>
									</div>
								</splide-slide>
								<splide-slide>
									<div class="slide-container">
										<a href="./?page=services" @click.prevent="goSlide(1)">← Back</a>

										<div class="margin-top-64">
											<h2>Clinical Training Workshop</h2>

											<div class="workshop-card">
												<h3>Psychological trauma and trauma work (adult/child, 3-day workshop)</h3>
												<ul>
													<li>Trauma, trauma memory, and trauma-spectrum disorders</li>
													<li>The component and structure of trauma-informed psychotherapy</li>
													<li>The modification of intersubjective knowledge</li>
												</ul>
											</div>

											<div class="workshop-card">
												<h3>Empathy in psychotherapy (2-day workshop)</h3>
												<ul>
													<li>Dyadic regulation of emotion and therapeutic relationship</li>
													<li>Transference analysis: Inter- and intra-personal dialogues in a relationship</li>
													<li>Critical skills: validation, mentalization, and moment of meeting</li>
												</ul>
											</div>

											<div class="workshop-card">
												<h3>Dissociation and Dissociative Disorders (1-day workshop)</h3>
												<ul>
													<li>Clinical presentation and differential diagnosis</li>
													<li>Diagnostic interview and psychological assessment</li>
													<li>Psychosocial risk factors and neurocognitive underpinnings</li>
												</ul>
											</div>

											<div class="workshop-card">
												<h3>Assessment of children at risk of trauma-spectrum disorders (2-day workshop)</h3>
												<ul>
													<li>Clinical presentation of severely maltreated children</li>
													<li>Incident and script memories of maltreatment</li>
													<li>Affect-centric narrative incoherence</li>
												</ul>
											</div>
										</div>
									</div>
								</splide-slide>
							</splide>
						</div>
					</section>
				</section>
				<link href="https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/dist/css/splide.min.css" rel="stylesheet">
			</main>`
}