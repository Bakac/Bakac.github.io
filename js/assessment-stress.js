export default {
	created () {
		document.title = 'Assessing Stress Reaction Type | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
    data() {
		return {
		    
		}
    },
    template: `
    <main>
	    <section class="banner">
	    	<div class="banner-overlay">
		    	<h1>Stress Reaction Type</h1>
		    </div>
	    </section>
	    <section class="body-container">
		    <section class="wrapper-horizontal">
							<div class="flex-box">
								<div class="flex-40">
									<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=assessments')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
								</div>
							</div>

				<div class="margin-top-64">
			    	<h2>Reactions to stressful events and self-representation</h2>
			    	<p>Imagine that you have lost your close friend in an accident. This would normally induce great emotional reactions. Being the person who witnessed the accident, some people would often have the experience of the accident popping up in the mind. The experience is often vivid and detailed, as if they were in the event again. Some people would think of the event all day long, such as its causes and consequences. There are also people who have both experiences, and people who would recover from the event in a short time. The reactions to stressful events such as the above can vary greatly across people. We postulate that the type of reactions is related to their underlying self-representation, which operates on two memory systems.<br></p>

					<h2 class="margin-top-64">Flashback and event-based autobiographical memory</h2>
			    	<p>[under constructoion]<br></p>
			    	<h3 class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-2')"><i class="fa fa-chevron-right toggle-icon"></i>Related research: Distorted Self-Referential Memory in Trauma-Related Disorders</h3>

					<h2 class="margin-top-64">Preoccupation and script-based autobiographical knowledge</h2>
			    	<p>[under constructoion]<br></p>
			    	<h3 class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-1')"><i class="fa fa-chevron-right toggle-icon"></i>Related research: Flexible Perspective Shifting in Empathy and Self-Empathy</h3>

			    	<h2 class="margin-top-64">Self-relating style, relationships, and stress-related disorders</h2>
			    	<p>[under constructoion: Talk about shame-guilt, self-reassurance, and responsiveness in close relationship.]<br></p>
			    	<h3 class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-3')"><i class="fa fa-chevron-right toggle-icon"></i>Related research: Biased Self-Evaluation in Trauma-Related Disorders</h3>

			    	<p> <br><br><br></p>


			    	<p style="text-align: center">[finally, a button asking them to take the test]</p>
			    </div>
		    </section>
	    </section>
    </main>`
}