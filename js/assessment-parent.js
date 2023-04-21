export default {
	created () {
		document.title = 'Assessing Parental Reactions | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
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
					<p class="title-section">Assessments for parents</p>
					<p class="title-large">What do you do when your child is under stress?</p>
					<p class="title-small">Imagine that you are playing a game with your child. You find that your child is having some difficulties with certain part of the game and feeling distressed. At this moment, what do you usually do, feel, and think?</p>
					<div><img src="./img/assessment-parent-banner.gif" width="600" style="margin: 3rem auto"></div>

					<h2>Three common types of responses</h2>
			    	<p>Most parents love their children. Every parent develops their own way to respond to their children's stress. Below are the most common types of responses: </p>

			    	<h3>1. Focus on own distress</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <img src="./img/assessment-parent-own.jpeg" width="250">
		              </div>
		              <div class="flex-60">
		                <p>As parents care about their child so much, they may feel a great sense of responsibility for the distress that their child is experiencing. Overwhelmed by the followed feelings, they may continue to think about themselves for a prolonged period and occastionally overlook the needs of the child who currently needs help. </p>
		              </div>
		            </div>

		            <h3>2. Focus on solving the game</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing from Peanut]</p>
		              </div>
		              <div class="flex-60">
		                <p>Being responsive to child's needs, some parents will focus on the challenges that their child is currently facing, and use their experiences to guide their child through the game step-by-step. Children may learn that asking for help is useful in future difficult situations. </p>
		              </div>
		            </div>

		            <h3>3. Focus on child's distress</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing from Peanut]</p>
		              </div>
		              <div class="flex-60">
		                <p>Some parents will focus on the distress of their child, affirming them and giving them emotional support when necessary. Child may have a sense of connection with their parents and feel warm and being cared. </p>
		              </div>
		            </div>

			    	<p><br><br>The unique style each parent adopts to interact with children greatly affect their socioemotional development. For example, children may learn about themselves regarding what resources they have when facing stress, whether they should seek help, and how to regulate their emotions. This knowledge shapes their self-identities and guides their ways to relate to others under stress.</p>

			    	<h2>Assessments in our laboratory</h2>
			    	<p>Understanding parent’s response style to child’s stress is vital to child’s healthy growth. In our laboratory, we assess it using a parent-child interactive task. This task asks the child to complete difficult tangram puzzles which may induce a moderate level of stress on the child.</p>
			    	<p>We observe the reactions of the parent in a naturalistic way, and rate parental response style on several aspects. This can provide measures that is more objective than parent’s self-report of own parenting behavior. If you are a clinician, our laboratory provides trainings of administering the tangram task. If you are a parent who wants your child to have a taste of this assessment, you can sign up for our parent-child research project.</p>

			    	<div class="flex-box margin-top-64">
			    		<button class="assess-btn" @click.prevent="$emit('clickPage', './?page=people')">Find our CPs for training</button>
			    		<button class="assess-btn" @click.prevent="$emit('clickPage', './?page=joinus')">Join our research studies</button>
			    	</div>
			    </div>
		    </article>
	    </section>
    </main>`
}