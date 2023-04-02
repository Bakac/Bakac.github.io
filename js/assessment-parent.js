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
	    <section class="banner">
	    	<div class="banner-overlay">
		    	<h1>Parent's reactions to child's stress</h1>
		    </div>
	    </section>
	    <section class="body-container">
		    <article class="wrapper-horizontal">
							<div class="flex-box">
								<div class="flex-40">
									<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=assessments')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
								</div>
							</div>

				<div class="margin-top-64">
			    	<h2>When your child is under stress…</h2>
			    	<p>Imagine that you are playing a game with your child. You find that your child is having some difficulties with certain part of the game. What do you usually do, feel, and think?</p>
			    	<p>Different parents may respond to their children differently. Some parents tend to focus on the game and teach their children how to solve the problems step by step. Some parents focus on the emotional distress of their children and comfort them. Still, some parents think it is normal for their children to experience distress, giving them rooms for self-exploration.</p>
			    	<p>The unique style each parent (or primary caregiver) adopts to interact with children greatly affect their socioemotional development. For example, children may learn about themselves regarding what resources they have when facing stress, whether they should seek help, and how to regulate their emotions. This knowledge shapes their self-identities and guides their ways to relate to others under stress.</p>

			    	<h2>Assessing parental reactions to child’s stress</h2>
			    	<p>Understanding parent’s response style to child’s stress is vital to child’s healthy growth. In our laboratory, we assess it using a parent-child interactive task. This task asks the child to complete difficult tangram puzzles which may induce a moderate level of stress on the child.</p>
			    	<p>We observe the reactions of the parent in a naturalistic way, and rate parental response style on several aspects. This can provide measures that is more objective than parent’s self-report of own parenting behavior. If you are a clinician, our laboratory provides trainings of administering the tangram task. If you are a parent who wants your child to have a taste of this assessment, you can sign up for our parent-child research project.</p>

			    	<p style="text-align: center"><br><br>[finally, two buttons: one asks them to find our CP; one asks them to come to the lab to join our study]</p>
			    </div>
		    </article>
	    </section>
    </main>`
}