export default {
	created () {
		document.title = 'Biased Self-Evaluation | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
	data() {
		return {
			proj_title: 'Biased Self-Evaluation in Trauma-Related Disorders', 
			proj_description: 'Our knowledge about the self accumulates through feedback from others and guides the way we interpret social information. People with early childhood relational trauma, such as emotional abuse and neglect, may develop biased self-knowledge due to frequent exposure to invalidating feedback. Associating the self with negative attributes (e.g., being rejected), which is common in people with trauma-related disorders, hence lead to dysfunctional information processing pattern. For example, it is found that self-rejecting individuals are more sensitive to negative social feedback regardless of their applicability, and have more difficulties regulating the elicited negative mood.', 
			proj_img: './img/project-3.webp',
			articles: [
				{ 
					title: 'Chiu, C.-D., Ho, H. L., &amp; Tollenaar, M. S. (2022). Relational self-evaluations in dissociation: Implicit self-rejection? <em>Psychological Trauma: Theory, Research, Practice, and Policy, 14,</em> 99&ndash;106. ', 
					abstract: '<b>Objective:</b> Schematic self-knowledge consists of internal representations that shape perceptions of how the self is related to one’s surroundings and other people. These representations may include dysfunctional implicit self-evaluations, such as associations of the self with negative attributes like shame, in trauma-spectrum disorders. The current study examines whether a negative relational self-association, that is, linking the self with rejection, characterizes dissociation. <b>Method:</b> One hundred six community participants with diverse early interpersonal experiences and mental health outcomes were recruited. Implicit relational self-evaluation was assessed by single-target implicit association tests. Dissociation and common psychopathological and psychosocial correlates such as anxiety, depression, self-esteem, and adverse interpersonal experiences were measured using standardized scales. <b>Results:</b> Individuals with more dissociative symptoms responded faster when pairing self-pronouns with rejection-related words than with acceptance-related words. The correlation between dissociation and this self-rejection association remained significant when statistically controlling for adverse interpersonal experiences and for depression, anxiety, and self-esteem. <b>Conclusion:</b> A self-association with being rejected characterized individuals prone to dissociation. This dysfunctional implicit self-evaluation may bias perceptions of other people’s attitudes toward themselves, prompting maladaptive social behaviors that can hinder the development and maintenance of relationships in dissociative people.', 
					keywords: 'child abuse, dissociation, implicit association, relational schema, social rejection' 
				}, { 
					title: 'van Schie, C. C., Chiu, C.-D., Rombouts, S. A. R. B., Heiser, W. J., &amp; Elzinga, B. M. (2020). Stuck in a negative me: fMRI study on the role of disturbed self-views in social feedback processing in borderline personality disorder. <em>Psychological Medicine, 50,</em> 625&ndash;635. ', 
					abstract: '<b>Background.</b> Interpersonal difficulties in borderline personality disorder (BPD) could be related to the disturbed self-views of BPD patients. This study investigates affective and neural responses to positive and negative social feedback (SF) of BPD patients compared with healthy (HC) and low self-esteem (LSE) controls and how this relates to individual self-views. <b>Methods.</b> BPD (<em>N</em> = 26), HC (<em>N</em> = 32), and LSE (<em>N</em> = 22) performed a SF task in a magnetic resonance imaging scanner. Participants received 15 negative, intermediate and positive evaluative feedback words putatively given by another participant and rated their mood and applicability of the words to the self. <b>Results.</b> BPD had more negative self-views than HC and felt worse after negative feedback. Applicability of feedback was a less strong determinant of mood in BPD than HC. Increased precuneus activation was observed in HC to negative compared with positive feedback, whereas in BPD, this was similarly low for both valences. HC showed increased temporoparietal junction (TPJ) activation to positive v. negative feedback, while BPD showed more TPJ activation to negative feedback. The LSE group showed a different pattern of results suggesting that LSE cannot explain these findings in BPD. <b>Conclusions.</b> The negative self-views that BPD have, may obstruct critically examining negative feedback, resulting in lower mood. Moreover, where HC focus on the positive feedback (based on TPJ activation), BPD seem to focus more on negative feedback, potentially maintaining negative self-views. Better balanced self-views may make BPD better equipped to deal with potential negative feedback and more open to positive interactions.', 
					keywords: 'borderline personality disorder, precuneus, self-esteem, self-views, social feedback, TPJ' 
				}, { 
					title: 'van Schie, C. C., Chiu, C.-D., Rombouts, S. A. R. B., Heiser, W. J., &amp; Elzinga, B. M. (2018). When compliments don&rsquo;t hit but critiques do: An fMRI study into self-esteem and self-knowledge in processing social feedback. <em>Social Cognitive and Affective Neuroscience, 13</em>, 404&ndash;417. ', 
					abstract: 'The way we view ourselves may play an important role in our responses to interpersonal interactions. In this study, we investigate how feedback valence, consistency of feedback with self-knowledge and global self-esteem influence affective and neural responses to social feedback. Participants (<em>N</em> = 46) with a high range of self-esteem levels performed the social feedback task in an MRI scanner. Negative, intermediate and positive feedback was provided, supposedly by another person based on a personal interview. Participants rated their mood and applicability of feedback to the self. Analyses on trial basis on neural and affective responses are used to incorporate applicability of individual feedback words. Lower self-esteem related to low mood especially after receiving non-applicable negative feedback. Higher self-esteem related to increased posterior cingulate cortex and precuneus activation (i.e. self-referential processing) for applicable negative feedback. Lower self-esteem related to decreased medial prefrontal cortex, insula, anterior cingulate cortex and posterior cingulate cortex activation (i.e. self-referential processing) during positive feedback and decreased temporoparietal junction activation (i.e. other referential processing) for applicable positive feedback. Self-esteem and consistency of feedback with self-knowledge appear to guide our affective and neural responses to social feedback. This may be highly relevant for the interpersonal problems that individuals face with low self-esteem and negative self-views.', 
					keywords: 'social feedback, fMRI, self-concept, self-referential processing, self-esteem' 
				}
			]
		}
	},
	methods: {
		toggleTable(event) {
			if (event.target.nextElementSibling.style.maxHeight == '') {
				event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + 'px';
			} else { 
				event.target.nextElementSibling.style.maxHeight = '';
			}
			event.target.nextElementSibling.classList.toggle("opened");
			event.target.querySelector('i').classList.toggle("opened");
		}
	},
	template: `
			<main>
				<section class="body-container flex-stack">
					<section id="project" class="dark">
						<div class="card">
							<div class="wrapper-horizontal flex-box">
								<div class="flex-40">
									<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=assessment-stress')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
								</div>
							</div>

							<div class="wrapper-horizontal flex-box margin-top-32">
								<div class="flex-60">
									<h2>{{proj_title}}</h2>
									<p>{{proj_description}}</p>
								</div>

								<div class="flex-40">
									<img class="img-center max-height-300" :src="proj_img" width="1920">
								</div>
							</div>

							<div class="wrapper-horizontal flex-box margin-top-64">
								<div class="flex-40">
									<h3>Related Articles</h3>
									<p v-for="article in articles">
										<span v-html="article.title"></span> 
										<span class="inlineBtn highlight" @click="toggleTable($event)">Abstract<i class="fa fa-chevron-right toggle-icon toggle-icon-right"></i></span>
										<div class="toggle-box toggle-section">
											<div class="left-border">
												<p v-html="article.abstract"></p>
												<p><b>Keywords:</b> {{article.keywords}}</p>
											</div>
										</div>
									</p>
								</div>
							</div>
						</div>
					</section>
				</section>
			</main>`
}