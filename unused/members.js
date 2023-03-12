export default {
  props: {
    labname: String
  },
  data() {
    return {
      Staff: [
        { name: 'Frankie Mak', img: './img/mak-frankie.jpg', position: 'Research Associate', description: 'Frankie obtained both his Bachelor’s degree and M.Phil. degree in CUHK. He is interested in how implicit self-rejection is developed in an individual, and the cognitive and behavioural outcomes of self-rejection. With the knowledge in these areas, he wants to develop low-intensity assessment and treatment tools to help people in the general public cope with their socio-emotional issues.'}, 
        { name: 'Harris Chung', img: './img/avatar.jpeg', position: 'Research Assistant', description: 'Description'},
        { name: 'Eunice Ho', img: './img/avatar.jpeg', position: 'Honorary Clinical Consultant', description: ''},
        { name: 'Cathy Kwok', img: './img/avatar.jpeg', position: 'Honorary Clinical Consultant', description: ''},
        { name: 'Alissa Ng', img: './img/avatar.jpeg', position: 'Honorary Research Assistant', description: ''}
        ], 
      RPg: [
        { name: 'Yimei Zhang', img: './img/zhang-yimei.jpeg', position: 'Ph.D. in Psychology', description: 'Yimei is interested in how people with mental illness, such as borderline personality disorder, build up intimate relationships, and how they communicate with their intimate partners. She hopes her research can help people with mental illness develop healthy relationships in which they can perceive support and acquire improvement.'}, 
        { name: 'Kam Hei Hui', img: './img/hui-kamhei.png', position: 'Ph.D. in Psychology', description: 'Obtaining his Bachelor’s degree in CUHK, Kam Hei is passionate in knowing how people imagine their future. He hopes to boost people’s determination and confidence to pursue their goals through update of autobiographical knowledge and biofeedback.'}, 
        { name: 'Celia Siu', img: './img/siu-celia.jpeg', position: 'M.Phil. in Psychology', description: 'Celia is interested in people’s relationship with the self. During undergraduate study, she studied the individual difference of people’s attitude toward an unfavourable aspect of themselves. Currently, she is studying how childhood relational trauma and perceived loneliness may contribute to self-directed violence (suicide).'}
        ], 
      CP: [
        { name: 'Bianca Chan', img: './img/avatar.jpeg', position: 'Psy.D. in Clinical Psychology' }, 
        { name: 'Daniel Chan', img: './img/avatar.jpeg', position: 'Psy.D. in Clinical Psychology' }, 
        { name: 'Jessica Chan', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
        { name: 'Celia Ho', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
        { name: 'Florence Huang', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
        { name: 'Rachel Chong', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
        { name: 'Raymond Ho', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
        { name: 'Terry Lau', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
        { name: 'Kristin Ng', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }
        ],
      MA: [
        { name: 'Emily Chan', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Karly Chuang', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Christine Chow', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Emily Chung', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Emma Lau', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Vickie Lee', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Wayne Lee', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }, 
        { name: 'Elaine To', img: './img/avatar.jpeg', position: 'M.A. in Psychology' }
        ],
      UG: [
        { name: 'Hazel Lee', img: './img/avatar.jpeg', position: 'B.S.Sc. in Psychology' }, 
        { name: 'Isla Wong', img: './img/avatar.jpeg', position: 'B.S.Sc. in Psychology' }, 
        { name: 'Peanut Wong', img: './img/avatar.jpeg', position: 'B.S.Sc. in Psychology' }
        ], 
      Alumni: [{ 
        degree: 'M.Phil. in Psychology',
        people: [
          { name: 'Frankie Mak', year: '2022', thesis: 'Less is more when judging who is helpful? Additional source details do not aid social decision making' }, 
          { name: 'Alfred Lo', year: '2021', thesis: 'A multinomial modeling analysis of source memory in relation to emotion recognition' }, 
          { name: 'Alissa Ng', year: '2019', thesis: 'Struggling back to the self, even with one more step: Perspective shifting, emotion sharing, and borderline personality disorder' }
        ]}, { 
        degree: 'M.S.Sc. in Clinical Psychology',
        people: [
          { name: 'Cosy Cheung', year: '2022', thesis: '' },
          { name: 'Toby Jong', year: '2022', thesis: '' },
          { name: 'Jeff Kei', year: '2022', thesis: '' },
          { name: 'Janice Li', year: '2022', thesis: '' },
          { name: 'Jenny Ng', year: '2022', thesis: '' },
          { name: 'Kristine Yeung', year: '2022', thesis: '' },
          { name: 'Wingman Law', year: '2022', thesis: '' },
          { name: 'Ivy Leung', year: '2022', thesis: '' },
          { name: 'Alissa Ng', year: '2022', thesis: '' },
          { name: 'Melody Tsui', year: '2022', thesis: '' },
          { name: 'Eunice Ho', year: '2021', thesis: '' },
          { name: 'Stephanie Jor', year: '2021', thesis: '' },
          { name: 'Emily Sze', year: '2021', thesis: '' },
          { name: 'Nicky Chan', year: '2019', thesis: '' },
          { name: 'Pak Lun Ho', year: '2019', thesis: '' },
          { name: 'Daniel Cheng', year: '2018', thesis: 'A change of my view through your eyes: The bound between anxious attachment and advantaged self-to-other perspective switch' },
          { name: 'Koey Cheung', year: '2018', thesis: '' },
          { name: 'Gina Siu', year: '2018', thesis: 'Seeing my fault in your eyes, feeling rejected in my mind' },
          { name: 'Victoria Tang', year: '2018', thesis: 'It is you that is on my mind: An advantage in source memory of other-provided information in anxiously attached adults' },
          { name: 'Ethiana Chung', year: '2017', thesis: 'Giving back its original attention: Functional dissociation of idea of social reference from idea of persecution in community samples' },
          { name: 'Sarina Drummond', year: '2017', thesis: 'From other-inflicted victimization to a victimizing self: The role of self-blame in the pathogenesis of psychopathology for survivors of early interpersonal trauma' },
          { name: 'Cathy Kwok', year: '2017', thesis: 'Feel you, accept me: Swift perspective switching associated with emotional empathy and self-compassion' },
          { name: 'Michael Ng', year: '2017', thesis: 'Alienation: Loss of self after childhood trauma' },
          { name: 'Kahlen Chan', year: '2016', thesis: 'Affect regulation for the other or the self? The effect of attachment style on listeners using different responding styles in a dyadic affect regulation context' },
          { name: 'Sally Cheung', year: '2016', thesis: 'I cannot process nor ignore your feedback: The devastating effect of self-reference on anger tendency when the self-concept is unclear' },
          { name: 'Yuki Ma', year: '2016', thesis: 'Helping can backfire: Vicarious distress in interpersonal emotion regulation' },
        ]}, { 
        degree: 'M.A. in Psychology',
        people: [
          { name: 'Rachel Chan', year: '2022', thesis: 'The association between emotion understanding and interpersonal responsiveness and perception of partner’s responsiveness' },
          { name: 'Max Chau', year: '2022', thesis: 'The relationship between alexithymia, interpersonal emotional regulation, and perception of partner’s responsiveness' },
          { name: 'Ching Ying Lee', year: '2022', thesis: 'Emotional awareness and emotional regulations: The mediating role of self-concept clarity' },
          { name: 'Xiaojing Wu', year: '2022', thesis: 'The relationship between alexithymia, depression and autobiographical memory specificity' },
          { name: 'Constance Ho', year: '2021', thesis: '' },
          { name: 'Jasmine Jim', year: '2021', thesis: '' },
          { name: 'Shirley So', year: '2021', thesis: '' },
          { name: 'Rachel Chong', year: '2020', thesis: '' },
          { name: 'Karen Chim', year: '2015', thesis: 'A study on social workers’ perception on working with survivors of childhood trauma and its relationship with their personal traits' },
          { name: 'Ping Ping Chong', year: '2015', thesis: 'A study of relationship between dissociation, adult attachment and betrayal trauma' },
          { name: 'Yvonne Ngo', year: '2015', thesis: 'Are empathetic abilities impaired in dissociation? Examining the relationship between empathetic abilities, dissociation and betrayal trauma' },
          { name: 'Baker Siu', year: '2015', thesis: 'The restoration effect of nature and urban scenery on induced negative mood: its implication on the existing theory of mechanism' }
        ]}, { 
        degree: 'B.S.Sc. in Psychology',
        people: [
          { name: 'Harris Chung', year: '2022', thesis: 'Our self-esteem stands: The role of regulation on receiving self-esteem-inconsistent social feedback' }, 
          { name: 'Raymond Ho', year: '2022', thesis: 'Beyond knowing what I have done: Emotion ascription depends on past experience' }, 
          { name: 'Joshua Yiu', year: '2022', thesis: 'Tell emotions loudly: Organization of affective information had an effect additional to problem and resolution elaboration on verbal emotional expression' }, 
          { name: 'Torres Chan', year: '2021', thesis: 'Turning away or running away? Analysis of moral disengagement and moral emotions' }, 
          { name: 'Celia Ho', year: '2021', thesis: 'Magnitude in phasic vagal withdrawal predicts response times in emotion recognition' }, 
          { name: 'Joey Leung', year: '2021', thesis: '' }, 
          { name: 'Hilvin Yu', year: '2021', thesis: 'When both the mind and heart matter: Interaction of emotion recognition and heart rate variability in perceiving other’s pain' }, 
          { name: 'Kam Hei Hui', year: '2020', thesis: 'The romance between you, a circle, and the rectangle: Visuospatial perspective shifting and empathy in social sharing context' }, 
          { name: 'Charmaine Tsoi', year: '2020', thesis: 'Clinging to you and attacking myself: The link between the relationships with intimate others and that with self' }, 
          { name: 'Celia Siu', year: '2019', thesis: 'Make peace, or love? The duality of being mindful when meeting shameful me' }, 
          { name: 'Marshall Hui', year: '2018', thesis: 'Are emotional faces of handsome and ugly peers processed differently? Evidence showing liking moderates affective reactions in affective priming paradigm' }, 
          { name: 'Michelle Zhao', year: '2018', thesis: 'Seeing the disparity between you and me: Self-relevance advantage at taking a third-person perspective' }, 
          { name: 'Alfred Lo', year: '2017', thesis: 'Feel the same as you: Perspective switch underlies empathic emotion in a social sharing Experiment' }, 
          { name: 'Alissa Ng', year: '2017', thesis: 'Beyond the visible: Revisiting the link between childhood interpersonal trauma and empathic capacity' }, 
          { name: 'Koey Cheung', year: '2016', thesis: 'Distressed for you, or myself? The associations of emotion contagion, self-esteem and affect regulation with orientations of distress' }, 
          { name: 'Sammi Li', year: '2016', thesis: 'Your solution or my getaway? The differential impacts between analytical and experiential responding' }, 
          { name: 'Aretha Chui', year: '2015', thesis: 'Shame-proneness, childhood trauma and parental dysfunction: The developmental trajectory of shame-proneness' }, 
          { name: 'Eunice Ho', year: '2015', thesis: 'Childhood trauma, dissociation experiences, and shame-proneness: An examination of a diathesis-stress model' } 
        ]}
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
      <div>
        <section class="banner">
          <h1>Members</h1>
        </section>
        <section class="body-container">
          <section id="members" class="wrapper-horizontal">
            <div class="title-box">Staff</div>
            <div class="people-card" v-for="person in Staff">
              <div class="flex-40">
                <img :src="person.img" width="250">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Research-track Postgraduates</div>
            <div class="people-card" v-for="person in RPg">
              <div class="flex-40">
                <img :src="person.img" width="250">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Clinical-track Postgraduates</div>
            <div class="people-grid">
              <div class="people-grid-item" v-for="person in CP">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <img :src="person.img" width="250">
              </div>
            </div>

            <div class="title-box">Taught Postgraduates</div>
            <div class="people-grid">
              <div class="people-grid-item" v-for="person in MA">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <img :src="person.img" width="250">
              </div>
            </div>

            <div class="title-box">Undergraduate Thesis Students</div>
            <div class="people-grid">
              <div class="people-grid-item" v-for="person in UG">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <img :src="person.img" width="250">
              </div>
            </div>

            <div class="title-box">Alumni</div>
            <div class="alumni-section" v-for="degree in Alumni">
              <h3 class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>{{degree.degree}}</h3>
              <div class="toggle-box">
                <table class="alumni-table">
                  <colgroup>
                    <col style="width:10%">
                    <col style="width:20%">
                    <col style="width:70%">
                  </colgroup> 
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Name</th>
                      <th>Thesis Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="person in degree.people">
                      <td>{{person.year}}</td>
                      <td>{{person.name}}</td>
                      <td>{{person.thesis}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
      </div>`}