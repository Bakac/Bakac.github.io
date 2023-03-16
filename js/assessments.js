import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
	created () {
		document.title = 'Assessments | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
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
					<h1>Assessments</h1>
				</div>
			</section>
			<section class="body-container flex-stack">
				<section class="first-box">
					<div class="card">
						<div class="wrapper-horizontal flex-box">
							<div class="flex-60">
								<h2>Assessing your stress response type</h2>
								<p>The symptoms we experience after a stressful event vary from person to person. Some people will think of the event over and over again, while others will frequently re-experience the event. What is your stress response type?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-stress')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Solid_white.png" width="300">
								[A graphics showing a person with stress]
							</div>
						</div>
					</div>
				</section>

				<section class="dark">
					<div class="card">
						<div class="wrapper-horizontal flex-box flex-box-reverse">
							<div class="flex-60">
								<h2>Assessing child's self-representation</h2>
								<p>Many mental abilities are built upon one's understanding of the self. Children are in a critical period of the development of the self. How do their self-representations affect their organization of social information and related social abilities?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-child')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Solid_white.png" width="300">
								[A graphics showing a child representing the self in mind]
							</div>
						</div>
					</div>
				</section>

				<section>
					<div class="card">
						<div class="wrapper-horizontal flex-box">
							<div class="flex-60">
								<h2>Assessing parents' response to child's stress</h2>
								<p>When parents see their children in stress, they may respond in different ways. For example, they may minimize the stress, focusing on problem-solving, or focusing on children emotions. How do these tendencies affect children's social development?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-parent')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Solid_white.png" width="300">
								[A graphics showing a parent with stress when playing with child]
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>`
}