export default {
  props: {
    labname: String
  },
  data() {
    return {
      
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
        <section class="banner">
          <div class="banner-overlay">
            <h1>Research Highlights</h1>
          </div>
        </section>
        <section class="body-container flex-stack">
          <section id="project1">
            <div class="card wrapper-horizontal flex-box">
              <div class="flex-60">
                <h2>The Role of Flexible Perspective Shifting in Empathy and Self-Empathy</h2>
                <p>Empathy is an important sociocognitive ability for relating oneself to others. Feeling the emotions of others requires us to represent another mind in addition to our own. A similar process of representing an objectified self is involved when we get in touch with our own emotions (e.g., guilt and shame). Our studies demonstrated that the extend to which we feel the emotions of the self and others is related to the flexibility to shift from the visuospatial perspective of another to that of the self, which may indicate a role of flexible shifting between self- and other- representations in empathy.</p>
                <div>
                  <h3 class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>Related Articles</h3>
                  <div class="toggle-box toggle-section">
                    <p>Chiu, C.-D., Siu, C. Y., Ng, H. C., &amp; Baldwin, M. W. (2021). Visuospatial perspective shifting and relational self-association in dispositional shame and guilt. <em>Consciousness and Cognition</em>, <em>92</em>, Article 103140.</p>
                    <p>Chiu, C.-D., Ng, H. C., Kwok, W. K., &amp; Tollenaar, M. (2020). Feeling empathically toward other people and the self: The role of perspective shifting in emotion sharing and self-reassurance. <em>Clinical Psychological Science, 8,&nbsp;</em>169&ndash;183.</p>
                    <p>Chiu, C.-D., &amp; Yeh, Y.-Y. (2018). In your shoes or mine? Shifting from other to self perspective is vital for emotional empathy. <em>Emotion, 18</em>, 39&ndash;45.</p>
                  </div>
                </div>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.webp" width="1920">
              </div>
            </div>
          </section>

          <section id="project2" class="dark">
            <div class="card wrapper-horizontal flex-box flex-box-reverse">
              <div class="flex-60">
                <h2>Distorted Self-Referential Memory in Trauma-Related Disorders</h2>
                <p>Recognizing how different experiences and knowledge relate to the self is essential for many psychological functions. For example, we need to distinguish between what is proposed by the self and what is said by others in a conversation. Using a self-referential memory paradigm, we showed that trauma-related disorders, such as psychosis and dissociation, present with difficulty differentiating between self-generated and externally derived representations. This distortion of self-referential memory may be linked to an altered sense of self resulting from early relational trauma.</p>
                <div>
                  <h3 class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>Related Articles</h3>
                  <div class="toggle-box toggle-section">
                    <p>Chiu, C.-D., Tollenaar, M. S., Yang, C.-T., Elzinga, B. M., &amp; Zhang, T.-Y., &amp; Ho, H. L. (2019). The loss of the self in memory: Self-referential memory, childhood relational trauma, and dissociation. <em>Clinical Psychological Science, 7</em>, 265&ndash;282.</p>
                    <p>Chiu, C.-D., Ho, H. L., Tollenaar, M. S., Elzinga, B. M., &amp; Zhang, T.-Y. (2019). Early relational trauma and self representations: Misattributing externally derived representations as internally generated. <em>Psychological Trauma: Theory, Research, Practice, and Policy, 11</em>,&nbsp;64&ndash;72.</p>
                    <p>Chiu, C.-D., Ho, H. L., Tollenaar, M. S., Elzinga, B. M., &amp; Zhang, T.-Y. (2019). Early relational trauma and self representations: Misattributing externally derived representations as internally generated. <em>Psychological Trauma: Theory, Research, Practice, and Policy, 11</em>,&nbsp;64&ndash;72.</p>
                  </div>
                </div>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-2.webp" width="1920">
              </div>
            </div>
          </section>

          <section id="project3">
            <div class="card wrapper-horizontal flex-box">
              <div class="flex-60">
                <h2>Biased Self-Evaluation in Trauma-Related Disorders</h2>
                <p>Our knowledge about the self accumulates through feedback from others and guides the way we interpret social information. People with early childhood relational trauma, such as emotional abuse and neglect, may develop biased self-knowledge due to frequent exposure to invalidating feedback. Associating the self with negative attributes (e.g., being rejected), which is common in people with trauma-related disorders, hence lead to dysfunctional information processing pattern. For example, it is found that self-rejecting individuals are more sensitive to negative social feedback regardless of their applicability, and have more difficulties regulating the elicited negative mood.</p>
                <div>
                  <h3 class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>Related Articles</h3>
                  <div class="toggle-box toggle-section">
                    <p>Chiu, C.-D., Ho, H. L., &amp; Tollenaar, M. S. (2022). Relational self-evaluations in dissociation: Implicit self-rejection? <em>Psychological Trauma: Theory, Research, Practice, and Policy, 14,</em> 99&ndash;106.</p>
                    <p>van Schie, C. C., Chiu, C.-D., Rombouts, S. A. R. B., Heiser, W. J., &amp; Elzinga, B. M. (2020). Stuck in a negative me: fMRI study on the role of disturbed self-views in social feedback processing in borderline personality disorder. <em>Psychological Medicine, 50,</em> 625&ndash;635.</p>
                    <p>van Schie, C. C., Chiu, C.-D., Rombouts, S. A. R. B., Heiser, W. J., &amp; Elzinga, B. M. (2018). When compliments don&rsquo;t hit but critiques do: An fMRI study into self-esteem and self-knowledge in processing social feedback. <em>Social Cognitive and Affective Neuroscience, 13</em>, 404&ndash;417.</p>
                  </div>
                </div>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-3.webp" width="1920">
              </div>
            </div>
          </section>
        </section>
      </main>`
}