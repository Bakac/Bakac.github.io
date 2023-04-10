export default {
	created () {
		document.title = 'Assessments | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
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
								<h2>Assessing responses to challenges in different life stages</h2>
								<p>How we view ourselves determines our reactions to stress in different situations, from childhood to adulthood, as a parent or as a partner in inimate relationship. These reactions reflect understanding of our relationship with others and the self, and the underlying cogitive structure that comprises our self-representations. Below are the assessments we developed and used in research. We are also developing some self-assessment tools to assess responses to stress that is common in different life stages. </p>
							</div>
						</div>
					</div>
				</section>

				<section class="dark">
					<div class="card">
						<div class="wrapper-horizontal flex-box">
							<div class="flex-60">
								<h2>For adults in response to stressful events</h2>
								<p>The symptoms we experience after a stressful event vary from person to person. Some people will think of the event over and over again, while others will frequently re-experience the event. What is your stress response type?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-stress')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="./img/assessment-stress.webp" width="516">
							</div>
						</div>
					</div>
				</section>

				<section>
					<div class="card">
						<div class="wrapper-horizontal flex-box flex-box-reverse">
							<div class="flex-60">
								<h2>For couples in response to relationship conflicts</h2>
								<p>(Under construction; Wait for Yimei's work)</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-couple')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="./img/assessment-couple.webp" width="516">
							</div>
						</div>
					</div>
				</section>

				<section class="dark">
					<div class="card">
						<div class="wrapper-horizontal flex-box">
							<div class="flex-60">
								<h2>For parents in response to child's stress</h2>
								<p>When parents see their children in stress, they may respond in different ways. For example, they may minimize the stress, focusing on problem-solving, or focusing on children emotions. How do these tendencies affect children's social development?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-parent')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="./img/assessment-parent.webp" width="516">
							</div>
						</div>
					</div>
				</section>

				<section>
					<div class="card">
						<div class="wrapper-horizontal flex-box flex-box-reverse">
							<div class="flex-60">
								<h2>For children in response to other minds</h2>
								<p>Many mental abilities for understanding others are built upon one's knowledge of the self. Children are in a critical period of self development. How do their self-representations affect their organization of social information and related social abilities?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-child')">Learn more →</span>
							</div>

							<div class="flex-40">
								<img class="img-center max-height-300" src="./img/assessment-child.webp" width="516">
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>`
}