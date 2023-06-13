export default {
	created () {
		document.title = `Assessing Child's Self-Representation | Experimental Psychopathology and Psychotherapy Laboratory | CUHK`
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
					<p class="title-section">Assessments for children</p>
					<p class="title-large">Storytelling reveals how we organize social information</p>
					<p class="title-small">Here is a drawing showing different characters in an event. Based on the drawing, can you tell a story that describes the event with its antecedent and ending?</p>
					<div><img src="./img/roberts-demo.webp" width="600" style="margin: 3rem auto"></div>

			    	<h2>Storytelling as a powerful assessment tool</h2>
			    	<p>To construct a story, we use our experiences to attribute the causes and outcomes of the event. The content of the story may then reveal part of our personal history. </p>

					<div class="flex-box gap-64 margin-top-64">
						<div class="flex-60">
							<h3 style="text-align: center">Story 1</h3>
			    			<p>"Lily and her dad had just returned from church and were feeling bored. As they sat in the living room, Lily suggested they do some role-play with her favorite characters. Her dad was hesitant at first, but he finally agreed to play. They began acting out scenes from Lily's favorite books, and soon they were both fully immersed in their roles. They laughed and had a great time, completely forgetting about their boredom.</p>
			    			<p>As they were wrapping up their game, Lily's mom walked in and was shocked to see them playing like children. But instead of getting angry, she smiled and decided to join in on the fun. For the rest of the afternoon, the three of them acted out scenes together and had a great time. "</p>
						</div>

						<div class="flex-60">
							<h3 style="text-align: center">Story 2</h3>
			    			<p>"Susan and her dad were doing some role-play. They were happy. Mom walked in and was angry. She scolded them and left the room. Dad also left the room to argue with mom. In the end, Susan cried on her bed."</p>
						</div>
					</div>

			    	<h3>What can we know from the story?</h3>
			    	<p>Story 1 is a more elaborated story that has a positive ending. The characters are well-defined and act in a coherent manner. The actions of the characters are organized by their emotions and motivations. The temporal order of the story is also clear. It may hint on that the storyteller's experience with parents are generally positive and she can make use of emotions of others as a principle to understand another person in daily social situations. </p>
			    	<p>In contrast, Story 2 is somehow fragmented and ends negatively. The storyteller can tell some emotions of the characters, but the intentions and the reasons are not spoken. For dad's action, the emotions and motivations are also omitted. The storyteller may have grown up in a controlling environment and it may be hard for him/her to understand others' behaviour and emotions. </p>

					<p class="additional-info">
			    		<h3 class="additional-title">What more can be revealed?</h3>
			    		<p>Our personal history influences how we understand ourselves. From the stories, we can estimate storytellers’ self-understanding in terms of their competence, available resources, and emotions, and whether there are special events happened in their lives. These representations have a profound effect in guiding interpretations of social events, which in turn affect social behavior.</p>

			    		<p class="toggleBtn highlight" v-if="isShowBox1 == false" @click="isShowBox1 = true">Learn more ⇣</p>

			    		<p v-if="isShowBox1 == true">
			    			<h3 style="margin-top: 2.5em">Children's self-representation</h3>
			    			<p>From how the story is told, we can assess the sociocognitive profile of the storyteller that depends on various aspects of self-representation. As there are multiple characters in the story, one must be able to represent different perspectives in a coherent manner for an intelligible story. Hence, it is also possible to rate storytellers in terms of their ability to recognize others’ minds, organize the social information coherently, and use affect-related cues to understand others. They are essential skills that help us solve interpersonal conflicts and navigate the social world, and the lack of it may increase the risks of developing mental illnesses.</p>
			    			<p>Assessing the self-representation of children is not easy because it may be difficult for children to reflect on themselves and report the reflections verbally. Capitalizing on projective tests like the one described above, we are able to probe into children’s self-presentation in an indirect way. It is a new and advanced area that is closely relevant to the socioemotional development of children. Results have found that the self-presentation of children is, for instance, related to their ability to read others’ emotions, and the feeling of connectedness with others.</p>
			    		</p>
			    	</p>

			    	<h2>Can I have an assessment for my child?</h2>
			    	<p>Child assessment in Hong Kong is often focused on intelligence, personality, and neuropsychological assessments. Meanwhile, self-representation assessment is getting popular due to its great clinical significance. If you are a clinician, our laboratory provides trainings of using the Roberts Apperception Test for Children. If you are a parent who wants your child to have a taste of this assessment, you can sign up for our parent-child research project.</p>


			    	<div class="flex-box margin-top-64">
			    		<button class="assess-btn" @click.prevent="$emit('clickPage', './?page=people')">Find our team for training</button>
			    		<button class="assess-btn" @click.prevent="$emit('clickPage', './?page=joinus')">Join our research studies</button>
			    	</div>
			    </div>
		    </article>
	    </section>
    </main>`
}