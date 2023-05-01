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
		                <p>Text</p>
		              </div>
		            </div>

			    	<h3>2. Accommodating</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Text</p>
		              </div>
		            </div>

			    	<h3>3. Avoiding</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Text</p>
		              </div>
		            </div>

			    	<h3>4. Competing</h3>
		            <div class="flex-box">
		              <div class="flex-250">
		                <p style="width: 250px; height: 250px; border: 1px solid #000; ">[A drawing]</p>
		              </div>
		              <div class="flex-60">
		                <p>Text</p>
		              </div>
		            </div>
			    </div>
		    </article>
	    </section>
    </main>`
}