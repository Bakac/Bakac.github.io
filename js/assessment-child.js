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
		    	<h1>Child's Self-representation</h1>
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
			    	<h2>Self-representation assessment for children</h2>
			    	<p>(Under construction...)<br><br></p>

			    	
			    	<p>[Talk about the current focus of assessment is neuropsychological assessment. Self-representation (?) assessment is a new and advanced area, and results have found that the concerned ability may relate specific brain areas; cognitive and emotional empathy? Talk about CDES and Roberts-2]<br><br></p>



			    	<p style="text-align: center">[finally, two buttons: one asks them to find our CP; one asks them to come to the lab to join our study]</p>
			    </div>
		    </section>
	    </section>
    </main>`
}