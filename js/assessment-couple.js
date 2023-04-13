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
			    	<h2>What is responsiveness</h2>
			    	<p>[ Waiting for Yimei's work, expecting to receive in late Apr ]</p>
			    </div>
		    </article>
	    </section>
    </main>`
}