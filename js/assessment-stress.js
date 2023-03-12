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
		    	<h1>Stress Reaction Type</h1>
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
			    	<h2>Reactions to stressful events and self-representation</h2>
			    	<p>(Under construction...)<br><br></p>


			    	<p>[Talk about two types of memories, and frame them as source memory and VSPT. Talk about shame-guilt, self-reassurance, and responsiveness in close relationship. Talk about stress-related disorders. ]</p>

			    	<p>[Further readings: move some contents from research highlights]</p>


			    	<p style="text-align: center">[finally, a button asking them to take the test]</p>
			    </div>
		    </section>
	    </section>
    </main>`
}