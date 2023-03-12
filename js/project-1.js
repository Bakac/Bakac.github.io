export default {
	created () {
		document.title = 'Flexible Perspective Shifting | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
	},
	data() {
		return {
			proj_title: 'Flexible Perspective Shifting in Empathy and Self-Empathy', 
			proj_description: 'Empathy is an important sociocognitive ability for relating oneself to others. Feeling the emotions of others requires us to represent another mind in addition to our own. A similar process of representing an objectified self is involved when we get in touch with our own emotions (e.g., guilt and shame). Our studies demonstrated that the extend to which we feel the emotions of the self and others is related to the flexibility to shift from the visuospatial perspective of another to that of the self, which may indicate a role of flexible shifting between self- and other- representations in empathy.', 
			proj_img: './img/project-1.webp',
			articles: [
				{ 
					title: 'Chiu, C.-D., Siu, C. Y., Ng, H. C., &amp; Baldwin, M. W. (2021). Visuospatial perspective shifting and relational self-association in dispositional shame and guilt. <em>Consciousness and Cognition</em>, <em>92</em>, Article 103140. ', 
					abstract: 'Although dispositional shame and guilt have been distinguished by perceptions of the self and behavioral responses, the underlying information processing patterns remain unclear. We hypothesized that an ability to contemplate alternatives to perceptions of the current environment, i.e., flexibility in perspective shifting, may be essential to both dispositions. Dispositional shame may additionally relate to negative relational knowledge that involves a self-representation of being rejected. One hundred and six community participants rated the two dispositions, and had their flexibility in perspective shifting and internalized self-association with rejection assessed. Regression analysis indicated that a lower cost of perspective shifting was observed with dispositional guilt and shame. Yet, unlike a direct association with perspective shifting for dispositional guilt, it was an interaction between perspective shifting and negative relational knowledge that accounted for dispositional shame. The association of dispositional shame with perspective shifting was contingent upon the tendency to pair the self with rejection.', 
					keywords: 'moral emotions, rejection, self-conscious emotions, visuospatial perspective taking' 
				}, { 
					title: 'Chiu, C.-D., Ng, H. C., Kwok, W. K., &amp; Tollenaar, M. (2020). Feeling empathically toward other people and the self: The role of perspective shifting in emotion sharing and self-reassurance. <em>Clinical Psychological Science, 8,&nbsp;</em>169&ndash;183. ', 
					abstract: 'Feeling one’s own emotions empathically when negative thoughts about the self arise, a defining element of self-reassurance, promotes resilience to prolonged emotional reactivity. We propose that feeling empathically toward the self is accomplished by first stepping into the shoes of an objectified, undesired self-aspect, after which the process of perspective shifting should be completed by reengaging the self to experience the moment in the first person. We hypothesize that the resumption of the egocentric perspective in perspective shifting, a cognitive characteristic of sharing other people’s emotions, is crucial for self-reassurance as well. The relationships among flexibility in perspective shifting, self-reassurance, and emotion sharing were examined in community participants. Our results show that quickly switching back to a visuospatial egocentric perspective after adopting an opposing perspective relates to self-reassurance and emotion sharing. We conclude that both reassuring the self and empathizing with other people involve flexibility in perspective shifting.', 
					keywords: 'empathy, self-compassion, executive control, task switching, visuospatial perspective taking' 
				}, { 
					title: 'Chiu, C.-D., &amp; Yeh, Y.-Y. (2018). In your shoes or mine? Shifting from other to self perspective is vital for emotional empathy. <em>Emotion, 18</em>, 39&ndash;45. ', 
					abstract: 'Emotional empathy—feeling another person’s affective states—entails simulating how one would feel in the same circumstance. Prior research has implicated the role of executive controls and shown a link between visuospatial perspective taking and personal disposition of empathy. No study has investigated how executive control processes involved in perspective shifting relate to emotional empathy. Incorpo- rating a spatial perspective-taking task in a set switch paradigm, we investigated whether swiftly switching from the altercentric to the egocentric perspective is associated with heightened emotional empathy but not with accurate classification of low-level perceptual affective cues. Emotional empathy was measured by subjective ratings of arousal and the similarity of affective states with the target person when viewing photos of a person in an emotionally charged context. Cognitive empathy was measured by correct recognition of affective cues. Our results showed that executive controls in perspective shifting related to emotional empathy but not to cognitive empathy. Emotional empathy correlated negatively with the switch cost from the altercentric to the egocentric perspective and not vice versa. Faster switching from the altercentric to the egocentric perspective was associated with heightened emotional empathy. Moreover, the processing strategy did not moderate the association. Flexibility in perspective shifting, especially in regaining one’s own perspective after taking another person’s perspective, is critical for emotional empathy. To feel another person’s affective states, one should regain self- perspective after walking in the other person’s shoes.', 
					keywords: 'empathy, perspective taking, self, switching, vicarious emotion'
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
									<span class="toggleBtn highlight" @click.prevent="$emit('clickPage', './?page=ideas')"><i class="fa fa-chevron-left toggle-icon"></i>Back</span>
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