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
		    	<h1>Stress Response Type</h1>
		    </div>
	    </section>
	    <section class="body-container">
		    <section class="wrapper-horizontal">
		    	<article>
					<div class="flex-box">
						<div class="flex-40">
							<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=assessments')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
						</div>
					</div>

			    	<h2>Reactions to stressful events differ from person to person</h2>
			    	<p>Imagine that you have lost your close friend in an accident. This would normally trigger great emotional reactions. As the witness to such an accident, some individuals may experience the event repeatedly in their mind, with vivid and detailed memories as if they were reliving the event. Others may find themselves thinking about the event and its causes and consequences throughout the day. Meanwhile, some individuals may experience mixed and more complex types of reactions, while others may recover from the event more quickly. </p>
			    	<p>The reactions to such events can vary greatly from person to person. We postulate that these individual differences in reactions are related to underlying self-representations, which operate on two types of memory: event-based autobiographical memory and script-based autobiographical knowledge.</p>

					<h2>Event-based autobiographical memory and flashback</h2>
			    	<p>Recalling details of a particular event that one was previously in, such as the time, place, and people involved, is essential for many social functions. To accurately remember the details, we rely on clear and separated event-based autobiographical memories (or event memories) such that each event will not be confused with one another. It is suggested that people with strong event memories have the ability to process and solidify the details of an event, and organize them around abstract labels that are coherent with other events.</p>
			    	<p>During a stressful event, this ability helps to assimilate the event as part of the self. In contrast, deficits in this ability may lead to insufficient processing of the event without linking it to the self. This can result in an under-elaborated self-representation and the raw experience of reliving the stressful moments through flashbacks, which can interfere with daily life and lead to difficulty coping with stressors.</p>

			    	<p class="additional-info">
			    		<p class="additional-title">💡 Further Reading</p>
			    		<p>One way to quantify this ability to efficiently organize information in our laboratory is the use of a self-referential memory task. For more details, please read the following page.</p>
			    		<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-2')"><i class="fa fa-chevron-right toggle-icon"></i>Distorted Self-Referential Memory in Trauma-Related Disorders</p>
			    	</p>

					<h2>Script-based autobiographical knowledge and preoccupation</h2>
			    	<p>In addition to remembering certain events, our reactions to stress are also influenced by our general knowledge about ourselves. Similar to how we may have a mental script for how a job interview should go, we may also have scripts for how we should respond to stressful situations. These scripts are developed through early experiences of interacting with others who fulfill or fail to meet our needs, and their responses shape our expectations of who should take responsibility for different events and how we should manage them.</p>
			    	<p>Appropriate responses teach us how to face challenges in adaptive ways. However, individuals who often receive invalidating responses may develop maladaptive scripts, leading them to internalize responsibility when facing stress and decrease their tendency to affiliate with themselves and others. They may become preoccupied with self-doubt and worries about the causes and consequences of the stressful events.</p>

			    	<p class="additional-info">
			    		<p class="additional-title">💡 Further Reading</p>
			    		<p>In our laboratory, we measure the spontaneous tendency to affiliate with oneself and others using a visuospatial perspective shifting paradigm. Interested readers can check out the page below.</p>
			    		<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-1')"><i class="fa fa-chevron-right toggle-icon"></i>Flexible Perspective Shifting in Empathy and Self-Empathy</p>
			    	</p>

			    	<h2>Stress-related disorders and relationship with self and others</h2>
			    	<p>As mentioned above, both event-based autobiographical memory and script-based autobiographical knowledge serve their own functions that buffer us from stressful events. </p>
			    	<p>On the ond hand, individuals with maladaptive patterns in these memories may be more susceptible to various stress-related disorders. Fragmentation in event-based autobiographical memory can make individuals vulnerable to intrusions and flashbacks of highly stressful moments, which is a hallmark of post-traumatic stress disorder and panic attacks.</p>
			    	<p>On the other hand, a script of distancing oneself from the self and others after stress can lead to preoccupation with self-doubt and the unresolved event, a characteristic of depression. </p>
			    	<p>In more complex situations where both patterns are present, individuals may struggle persistently to stabilise themselves, leading to a negative relationship with the self that manifests as self-rejecting associations and feelings of shame. They may also alter their perception of the responsiveness of others, causing unstable intimate relationships. Some related conditions include somatization, dissociation, and personality dysfunctions.</p>

			    	<p class="additional-info">
			    		<p class="additional-title">💡 Further Reading</p>
			    		<p>To know more about the relationship between stress-related disorders and self- and other- functions, you can refer to the pages below. </p>
			    		<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-3')"><i class="fa fa-chevron-right toggle-icon"></i>Biased Self-Evaluation in Trauma-Related Disorders</p>
			    		<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', '#')"><i class="fa fa-chevron-right toggle-icon"></i>Diminished Perception of Responsiveness in Trauma-Related Disorders [under construction]</p>
			    	</p>

					<h2>Knowing your stress response type</h2>
			    	<p class="margin-bottom-40">We are currently developing a set of questionnaires that can assess your reactions to stress based on self-report symptoms and self-knowledge. Please stay tuned for any updates.<br></p>
		    	</article>
		    </section>
	    </section>
    </main>`
}