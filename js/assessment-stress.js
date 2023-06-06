export default {
	created () {
		document.title = 'Assessing Stress Reaction Type | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
    data() {
		return {
		    isShowBox1: false
		}
    },
    template: `
    <main>
	    <section class="body-container">
		    <article class="wrapper-horizontal">
				<div class="flex-box">
					<div class="flex-40">
						<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=assessments')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
					</div>
				</div>

				<div class="margin-top-64">
					<p class="title-section">Assessments for adults</p>
					<p class="title-large">What is your general responses to a recent stressful event?</p>
					<p class="title-small">Imagine that you have performed badly in an important interview. In what way will this event affect you for the following days?</p>
					<div><img src="./img/assessment-stress-banner.webp" width="600" style="margin: 3rem auto"></div>

			    	<h2>Common types of stress responses</h2>
			    	<h3>1. Preoccupation with self-doubt and worries</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <img src="./img/assessment-stress-preoccupation.webp" width="250">
		              </div>
		              <div class="flex-60">
		                <p>Some people will have a sense of failure after the interview, which evokes thoughts of self-doubt and worries related to the causes and consequences of failing the interview. This is common among people who tend to internalize responsibility. When failures accumunlate, people may link themselves to failure in their autobiographical knowledge, developing an overall feeling of incompetence and distancing themselves from the external world, which may lead to depression. </p>
		              </div>
		            </div>

			    	<h3>2. Flashbacks of stressful moments</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <img src="./img/assessment-stress-flashback.webp" width="250">
		              </div>
		              <div class="flex-60">
		                <p>While some people may not think of the interviews over and over, at some times the stressful moments come up in mind again, as if they have re-experienced them in a vivid and detailed manner. These emotion-evoking memories are often not sufficiently processed and can be retrieved only in their raw form without proper elaboration to one's autobiographical memory. People with fragmented memory may be more vulnerable to intrusions and flashbacks of highly stressful moments, which is a hallmark of post-traumatic stress disorder and panic attacks.</p>
		              </div>
		            </div>

			    	<h3>3. More complex symptoms</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <img src="./img/assessment-stress-complex.webp" width="250">
		              </div>
		              <div class="flex-60">
		                <p>In more complex situations, individuals may develop extreme self-rejecting associations and feelings of shame. Their persistent struggles to stablize themselves may lead to conditions such as somatization, dissociation, and personality dysfunctions. </p>
		              </div>
		            </div>

			    	<!-- <h3>4. Spontaneous recovery</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>While people described above may have prolonged issues, some others can recover from the failure after a short period of distress and are ready to take up the next challenge in their lives. </p>
		              </div>
		            </div> -->

			    	<p class="additional-info">
			    		<h2 class="additional-title">Responses to stress and self-representation</h2>
			    		<p>The reactions to such events can vary greatly from person to person. We postulate that these individual differences in reactions are related to underlying self-representations, which operate on two types of memory: event-based autobiographical memory and script-based autobiographical knowledge.</p>

			    		<p class="toggleBtn highlight" v-if="isShowBox1 == false" @click="isShowBox1 = true">Learn more ⇣</p>

			    		<p v-if="isShowBox1 == true">
			    			<h3 style="margin-top: 2.5em">Event-based autobiographical memory and flashback</h3>
			    			<p>Recalling details of a particular event that one was previously in, such as the time, place, and people involved, is essential for many social functions. To accurately remember the details, we rely on clear and separated event-based autobiographical memories (or event memories) such that each event will not be confused with one another. It is suggested that people with strong event memories have the ability to process and solidify the details of an event, and organize them around abstract labels that are coherent with other events.</p>
			    			<p>During a stressful event, this ability helps to assimilate the event as part of the self. In contrast, deficits in this ability may lead to insufficient processing of the event without linking it to the self. This can result in an under-elaborated self-representation and the raw experience of reliving the stressful moments through flashbacks, which can interfere with daily life and lead to difficulty coping with stressors.</p>
			    			<p>One way to quantify this ability to efficiently organize information in our laboratory is the use of a self-referential memory task. For more details, please read the following page.</p>
			    			<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-2')"><i class="fa fa-chevron-right toggle-icon"></i>Distorted Self-Referential Memory in Trauma-Related Disorders</p>

							<h3>Script-based autobiographical knowledge and preoccupation</h3>
					    	<p>In addition to remembering certain events, our reactions to stress are also influenced by our general knowledge about ourselves. Similar to how we may have a mental script for how a job interview should go, we may also have scripts for how we should respond to stressful situations. These scripts are developed through early experiences of interacting with others who fulfill or fail to meet our needs, and their responses shape our expectations of who should take responsibility for different events and how we should manage them.</p>
					    	<p>Appropriate responses teach us how to face challenges in adaptive ways. However, individuals who often receive invalidating responses may develop maladaptive scripts, leading them to internalize responsibility when facing stress and decrease their tendency to affiliate with themselves and others. They may become preoccupied with self-doubt and worries about the causes and consequences of the stressful events.</p>
					    	<p>In our laboratory, we measure the spontaneous tendency to affiliate with oneself and others using a visuospatial perspective shifting paradigm. Interested readers can check out the page below.</p>
			    			<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-1')"><i class="fa fa-chevron-right toggle-icon"></i>Flexible Perspective Shifting in Empathy and Self-Empathy</p>

			    			<h3>Other self-representation issues</h3>
			    			<p>People with trauma-related disorders are often having negative self-evaluation to a great extent. You can read the following pages for more details.</p>
			    			<p class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=project-3')"><i class="fa fa-chevron-right toggle-icon"></i>Biased Self-Evaluation in Trauma-Related Disorders</p>
			    		</p>
			    	</p>

					<h2>Knowing your stress response type</h2>
			    	<p class="margin-bottom-40">We are currently developing a set of questionnaires that can assess your reactions to stress based on self-report symptoms and self-knowledge. Please stay tuned for any updates.<br></p>
			    </div>
		    </article>
	    </section>
    </main>`
}