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
			    	<h2>Parental reactions to child's stress</h2>
			    	<p>(Under construction...)<br><br></p>

					<p style="text-align: center">[Talk about CCNES and Tangram task. ]</p>

			    	<p style="text-align: center">[finally, two buttons: one asks them to find our CP; one asks them to come to the lab to join our study]</p>
			    </div>
		    </article>
	    </section>
    </main>`
}