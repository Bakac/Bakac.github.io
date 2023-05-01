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
			<section class="body-container flex-stack">
				<section class="first-box">
					<div class="card">
						<div class="wrapper-horizontal flex-box">
							<div class="flex-60">
								<p class="title-section">Assessments</p>
								<p class="title-large">Our reactions to stress in different situations reveal who we are</p>
								<p class="title-small">Through understanding these reactions, it is possible to know more about our usual ways to relate to others and the self, their consequences, and the underlying cognitive structure that guides these reactions.</p>
								<p class="title-small">Below are the assessments we used in research. We are also developing some self-assessment tools to assess responses to stressful situations that are common in different life stages. </p>
							</div>
						</div>
					</div>

					<div class="wrapper-horizontal flex-box flex-box-reverse gap-64">
						<div class="flex-60">
							<div class="card" style="margin-top: 0">
								<h2>For adults in response to stressful events</h2>
								<img class="img-center max-height-300" src="./img/assessment-stress.webp" width="400" style="margin: 2rem auto">
								<p>The symptoms we experience after a stressful event vary from person to person. Some people will think of the event over and over again, while others will frequently re-experience the event. What is your stress response type and how do they associate with risk of mental illnesses?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-stress')">Learn more →</span>
							</div>

							<div class="card">
								<h2>For parents in response to child's stress</h2>
								<img class="img-center max-height-300" src="./img/assessment-parent.webp" width="400" style="margin: 3rem auto">
								<p>When parents see their children in stress, they may respond in different ways. For example, they may focus on their own responsibility, focus on problem-solving, or focus on children's emotions. What do you do and how may your responses affect children's social development?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-parent')">Learn more →</span>
							</div>
						</div>

						<div class="flex-60">
							<div class="card">
								<h2>For couples in response to relationship conflicts</h2>
								<img class="img-center max-height-300" src="./img/assessment-couple.webp" width="400" style="margin: 3rem auto">
								<p>A relationship is a two-way street. The ways you and your partner treat each other influence each other and the bonding in-between. What do you do when conflicts arise and how does it determine the relationship quality in the long run?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-couple')">Learn more →</span>
							</div>

							<div class="card" style="margin-bottom: 0">
								<h2>For children in response to other minds</h2>
								<img class="img-center max-height-300" src="./img/assessment-child.webp" width="400" style="margin: 3rem auto">
								<p>Many mental abilities for understanding others are built upon one's knowledge of the self. Children are in a critical period of self development. How do their self-representations affect their organization of social information and the ability to understand others mind?</p>
								<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=assessment-child')">Learn more →</span>
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>`
}