export default {
	created () {
		document.title = 'Our Ideas | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
    data() {
		return {
		    
		}
    },
    template: `
    <main>
	    <section class="banner">
	    	<div class="banner-overlay">
		    	<h1>Our Ideas</h1>
		    </div>
	    </section>
	    <section class="body-container">
		    <article class="wrapper-horizontal">
		    	<h2>How is self-representation developed?</h2>
		    	<p>Our understanding of the self is accumulated through the eyes of others: We interact with the people around us and assimilate evaluative feedback from them regarding different aspects of the self. We learn not only about who we are but also how to relate to others to satisfy needs. As early intimate relationships appear to be the most influential in these learning processes, people who have been subjected to early adverse relational experiences (e.g., emotional, physical, and sexual maltreatment) may develop a dysfunctional self-representation due to persistent invalidating and often inconsistent feedback. They may include fragmented self-aspects, confusion between self and others, and overgeneralized negative self-evaluation.</p>

		    	<h2>Dysfunctional self-representation and trauma spectrum disorders</h2>
		    	<p>We posit that people with trauma spectrum disorders, including but not limited to dissociative disorders, borderline personality disorder, and complex post-traumatic stress disorder, are characterized by different forms of dysfunctional self-representation that can be revealed in a variety of basic cognitive functions. To the extent that many interpersonal and intrapersonal functions build on top of these cognitive functions, people with trauma spectrum disorders are found to have deficits in the social domains such as empathy, feedback processing, and emotion regulation under relational stress.</p>

				<h2>Our approaches</h2>
		    	<p>Gaining insights from clinical practice about the underlying structure of sociocognitive functioning described above, we experiment with them in both clinical and non-clinical populations. We adopt a combination of methods to capture responses at different levels, which includes physiological measures, behavioral tests, observations, and introspective reports. Below shows our research framework and examples of relevant topics and phenomena that we are interested in:</p>
		    	<div style="overflow: auto"><img src="./img/framework.webp" width="1920" style="margin: 3rem 0; min-width: 484px"></div>
		    	<p class="margin-bottom-40">We strive to inform clinical case formulation with knowledge about the pathways underlying their dysfunctions. Driven by such value, we not only do studies in the laboratory, but also cooperate with service-providers in the healthcare setting in the hope of improving the existing practice for the clinical populations.</p>

		    	<!-- <div class="margin-bottom-40">
			    	<h3>Research Highlights</h3>
			    	<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-1')"><i class="fa fa-chevron-right toggle-icon"></i>Flexible Perspective Shifting in Empathy and Self-Empathy</p>
			    	<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-2')"><i class="fa fa-chevron-right toggle-icon"></i>Distorted Self-Referential Memory in Trauma-Related Disorders</p>
			    	<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-3')"><i class="fa fa-chevron-right toggle-icon"></i>Biased Self-Evaluation in Trauma-Related Disorders</p>
		    	</div> -->
		    </article>
	    </section>
    </main>`
}