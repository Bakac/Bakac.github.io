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
			    	<p>Imagine that you have lost your close friend in an accident. This would normally trigger great emotional reactions. As the witness to such an accident, some individuals may experience the event repeatedly in their mind, with vivid and detailed memories as if they were reliving the event. Others may find themselves thinking about the event and its causes and consequences throughout the day. Meanwhile, some individuals may experience both types of reactions, while others may recover from the event more quickly. The reactions to such events can vary greatly from person to person. We postulate that these individual differences in reactions are related to underlying self-representations, which operate on two types of memory: event-based autobiographical memory and script-based autobiographical knowledge.<br></p>

					<h2 class="margin-top-64">Event-based autobiographical memory and flashback</h2>
			    	<p>Recalling details of a particular event that one was previously in, such as the time, place, and people involved, is essential for many social functions. To accurately remember the details, we rely on clear and separated event-based autobiographical memories (or event memories) such that each event will not be confused with one another. It is suggested that people with strong event memories have the ability to process and solidify the details of an event, and organize them around abstract labels that is coherent with other events. In contrast, deficits in this ability may lead to insufficient processing of an event without linking it to the self. This can result in a fragmented self-representation and the raw experience of reliving stressful moments through flashbacks, which can interfere with daily life and lead to difficulty coping with stressors. One way to quantify this ability to efficiently organize information in our laboratory is the use of self-referential memory task. For more details, please read the following page.</p>
			    	<h3 class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-2')"><i class="fa fa-chevron-right toggle-icon"></i>Distorted Self-Referential Memory in Trauma-Related Disorders</h3>

					<h2 class="margin-top-64">Script-based autobiographical knowledge and preoccupation</h2>
			    	<p>In addition to remembering certain events, our reactions to stress are also influenced by our general knowledge about ourselves. Similar to how we may have a mental script for how a job interview should go, we may also have scripts for how we should respond to stressful situations. These scripts are developed through early experiences of interacting with others who either fulfilled or failed to meet our needs, and their responses shape our expectations of who should take responsibility for certain types of events and how we should manage them. Individuals who often receive invalidating responses may develop maladaptive scripts, leading them to internalize responsibility when facing stress and decrease their tendency to affiliate with themselves and others. They may become preoccupied with self-doubt and worries about the causes and consequences of stressful events. In our laboratory, we measure the spontaneous tendency to affiliate with oneself and others using a visuospatial perspective shifting paradigm. Interested readers can check out the page below. <br></p>
			    	<h3 class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-1')"><i class="fa fa-chevron-right toggle-icon"></i>Flexible Perspective Shifting in Empathy and Self-Empathy</h3>

			    	<h2 class="margin-top-64">Self-relating style, relationships, and stress-related disorders</h2>
			    	<p>[under constructoion: Talk about shame-guilt, self-reassurance, and responsiveness in close relationship.]<br></p>
			    	<h3 class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-3')"><i class="fa fa-chevron-right toggle-icon"></i>Biased Self-Evaluation in Trauma-Related Disorders</h3>

			    	<p> <br><br><br></p>


			    	<p style="text-align: center">[finally, a button asking them to take the test]</p>
			    </div>
		    </section>
	    </section>
    </main>`
}