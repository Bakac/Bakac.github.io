export default {
	created () {
		document.title = `Assessing Couples' Responsiveness | Experimental Psychopathology and Psychotherapy Laboratory | CUHK`
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
					<p class="title-section">Assessments for couples</p>
					<p class="title-large">How do you usually interact with your partner?</p>
					<p class="title-small">How do you usually respond to the needs of your partner? What will you do when conflicts arise between both of you?</p>
					<p style="width: 600px; height: 300px; border: 1px solid #000; margin: 3rem auto; text-align: center">[A photo/drawing]</p>

			    	<h2>Four common types of interaction style</h2>
			    	<p>How we usually respond to our partner can be categorized into four common types. They reveal whether we want to approach or avoid connection with others and our perception of the power structure in the relationship. </p>

			    	<h3>1. Collaborating</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Collaborating individuals tend to have a cooperative and problem-solving approach to relationships. They actively work with their partners to find mutually beneficial solutions to any issues that may arise. They are good at communicating their thoughts and feelings and are willing to compromise to reach a solution that satisfies both partners.</p>
		              </div>
		            </div>

			    	<h3>2. Accommodating</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Accommodating individuals tend to prioritize their partner's needs and desires over their own. They may be very nurturing and caring, and they may avoid conflict to maintain harmony in the relationship. They may also struggle with setting boundaries and standing up for themselves, which can lead to resentment over time.</p>
		              </div>
		            </div>

			    	<h3>3. Avoiding</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Avoiding individuals tend to avoid conflict or emotional intimacy in their relationships. They may be distant or detached from their partners and may struggle to communicate their feelings. They may also prioritize their independence and personal space over their relationship, which can create a sense of distance between them and their partner.</p>
		              </div>
		            </div>

			    	<h3>4. Competing</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Competing individuals tend to externalize the responsibility of conflicts and blame their partners for any issues that arise in the relationship. They may have a strong sense of dominance over their partner and prioritize their own needs over their partner's. As a result, they may be easily irritated when things do not come out as they expect and less willing to compromise as they think it is not their problem. </p>
		              </div>
		            </div>

		            <h2>Knowing your interaction style</h2>
			    	<p class="margin-bottom-40">We are currently developing a set of questionnaires that can assess your interaction with your partner. Please stay tuned for any updates.<br></p>
			    </div>
		    </article>
	    </section>
    </main>`
}