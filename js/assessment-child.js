export default {
	created () {
		document.title = `Assessing Child's Self-Representation | Experimental Psychopathology and Psychotherapy Laboratory | CUHK`
	},
    data() {
		return {
		    
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
					<p class="title-section">Assessments for children (Under construction)</p>
					<p class="title-large">Storytelling reveals how we organize social information</p>
					<p class="title-small">Here is a drawing showing different characters in an event. Based on the drawing, can you tell a story that describes the event with its antecedent and ending?</p>
					<div><img src="./img/roberts-demo.webp" width="600" style="margin: 3rem auto"></div>

			    	<h2>Storytelling as a powerful assessment tool</h2>
			    	<p>To construct a story, we use our experiences to attribute the causes and outcomes of the event. The content of the story may then reveal part of our personal history. For example, people who have experienced many negative events may tell a story with a sad ending. Our personal history influences how we understand ourselves. From the stories, we can estimate storytellers’ self-understanding in terms of their competence, available resources, and emotions, and whether there are special events happened in their lives. These representations have a profound effect in guiding interpretations of social events, which in turn affect social behavior.</p>
			    	<p>Moreover, from how the story is told, we can assess the sociocognitive profile of the storyteller that depends on various aspects of self-representation. As there are multiple characters in the story, one must be able to represent different perspectives in a coherent manner for an intelligible story. Hence, it is also possible to rate storytellers in terms of their ability to recognize others’ minds, organize the social information coherently, and use affect-related cues to understand others. They are essential skills that help us solve interpersonal conflicts and navigate the social world, and the lack of it may increase the risks of developing mental illnesses.</p>

			    	<h2>Self-representation assessment for children</h2>
			    	<p>Assessing the self-representation of children is not easy because it may be difficult for children to reflect on themselves and report the reflections verbally. Capitalizing on projective tests like the one described above, we are able to probe into children’s self-presentation in an indirect way. It is a new and advanced area that is closely relevant to the socioemotional development of children. Results have found that the self-presentation of children is, for instance, related to their ability to recognize others’ emotions, and the feeling of connectedness with others.</p>
			    	<p>Child assessment in Hong Kong is often focused on intelligence, personality, and neuropsychological assessments. Meanwhile, self-representation assessment is getting popular due to its great clinical significance. If you are a clinician, our laboratory provides trainings of using the Roberts Apperception Test for Children. If you are a parent who wants your child to have a taste of this assessment, you can sign up for our parent-child research project.</p>


			    	<div class="flex-box margin-top-64">
			    		<button class="assess-btn" @click.prevent="$emit('clickPage', './?page=people')">Find our CPs for training</button>
			    		<button class="assess-btn" @click.prevent="$emit('clickPage', './?page=joinus')">Join our research studies</button>
			    	</div>
			    </div>
		    </article>
	    </section>
    </main>`
}