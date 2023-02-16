export default {
  props: {
    labname: String
  },
  data() {
    return {
      imgpath: './img/members/',
      CD: {
        description: `Trained in applying experimental approaches to delineating the cognitive mechanisms of psychopathology, his clinical and research interests concern the impact of aversive interpersonal experience and stressful life events on mental health. His current research focuses on exploring the role of dysfunctional self-regulation (e.g., self-esteem, shame, and self-versus-other boundary) in stress-related disorders such as post-traumatic stress disorder, dissociative disorders, and borderline personality disorder.`
      },
      Staff: [
        { name: 'Frankie Mak', img: 'mak-frankie.webp', position: 'Research Associate', description: 'He obtained his Bachelor’s degree and M.Phil. degree in CUHK. He is interested in the cognitive underpinnings of reflective abilities, and the outcomes of maladaptive relational perceptions. With knowledge in these areas, he wants to develop low-intensity assessment and treatment tools to raise public awareness of socio-emotional issues.', email: 'frankie.cdclab@gmail.com', tel: '3943-3507'}, 
        { name: 'Harris Chung', img: 'chung-harris.webp', position: 'Research Assistant', description: 'Working under the supervision of Prof. Chiu, he has previously completed an undergraduate thesis investigating the relationship among self-esteem, social feedback and heart rate variability. His research focuses on the implication of physiological response in the context of social cognition.', email: 'harris.cdclab@gmail.com', tel: '3943-3507'}
        ],
      HonStaff: [
        { name: 'Eunice Ho', img: 'member-1.webp', position: 'Honorary Clinical Consultant', description: ''},
        { name: 'Cathy Kwok', img: 'member-2.webp', position: 'Honorary Clinical Consultant', description: ''},
        { name: 'Alissa Ng', img: 'member-3.webp', position: 'Honorary Clinical Consultant', description: ''} 
        ], 
      RPg: [
        { name: 'Yimei Zhang', img: 'zhang-yimei.webp', position: 'Ph.D. in Psychology (Post-candidacy)', description: 'She is interested in how people with mental illness, such as borderline personality disorder, build up intimate relationships, and how they communicate with their intimate partners. She hopes her research can help people with mental illness develop healthy relationships in which they can perceive support and acquire improvement.'}, 
        { name: 'Kam Hei Hui', img: 'hui-kamhei.webp', position: 'Ph.D. in Psychology (Pre-candidacy)', description: 'Obtaining his Bachelor’s degree in CUHK, he is passionate in knowing how people imagine their future. He hopes to boost people’s determination and confidence to pursue their goals through update of autobiographical knowledge and biofeedback.'}, 
        { name: 'Celia Siu', img: 'siu-celia.webp', position: 'M.Phil. in Psychology', description: 'She is interested in people’s relationship with the self. During undergraduate study, she studied the individual difference of people’s attitude toward an unfavourable aspect of themselves. Currently, she is studying how childhood relational trauma and perceived loneliness may contribute to self-directed violence (suicide).'}
        ], 
      CP: [
        { name: 'Bianca Chan', img: 'chan-bianca.webp', position: 'Psy.D. in Clinical Psychology', description: 'She is a clinical psychologist working in the child & adolescent team of a psychiatric hospital. She is interested in working with adolescents with attachment difficulties, especially those with evolving borderline personality traits. She is currently studying the role of dissociation in adolescent mental health disorders. She is also a plant lover.' }, 
        { name: 'Daniel Chan', img: 'member-5.webp', position: 'Psy.D. in Clinical Psychology', description: '' }, 
        { name: 'Jessica Chan', img: 'member-6.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }, 
        { name: 'Celia Ho', img: 'member-7.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }, 
        { name: 'Florence Huang', img: 'member-1.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She is interested in experimental studies especially in areas of culturally sensitive code-switching response to sociolinguistic differences, and application of gamification in mental health and education. Also, she is a fan of creative board games. Currently, she is studying how the emotion mind-reading ability between parents and children may associate with their emotional states and parent-child relationships. ' }, 
        { name: 'Rachel Chong', img: 'chong-rachel.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }, 
        { name: 'Raymond Ho', img: 'ho-raymond.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }, 
        { name: 'Terry Lau', img: 'lau-terry.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }, 
        { name: 'Kristin Ng', img: 'ng-kristin.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }, 
        { name: 'Tracy Tso', img: 'tso-tracy.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' },
        { name: 'Charmaine Tsoi', img: 'tsoi-charmaine.webp', position: 'M.S.Sc. in Clinical Psychology', description: '' }

        ],
      MA: [
        { name: 'Emily Chan', img: 'member-2.webp', position: 'M.A. in Psychology' }, 
        { name: 'Karly Chuang', img: 'member-3.webp', position: 'M.A. in Psychology' }, 
        { name: 'Christine Chow', img: 'member-4.webp', position: 'M.A. in Psychology' }, 
        { name: 'Emily Chung', img: 'member-5.webp', position: 'M.A. in Psychology' }, 
        { name: 'Emma Lau', img: 'member-6.webp', position: 'M.A. in Psychology' }, 
        { name: 'Vickie Lee', img: 'member-7.webp', position: 'M.A. in Psychology' }, 
        { name: 'Wayne Lee', img: 'member-1.webp', position: 'M.A. in Psychology' }, 
        { name: 'Elaine To', img: 'member-2.webp', position: 'M.A. in Psychology' }
        ],
      UG: [
        { name: 'Hazel Lee', img: 'member-3.webp', position: 'B.S.Sc. in Psychology', description: '' }, 
        { name: 'Isla Wong', img: 'member-4.webp', position: 'B.S.Sc. in Psychology', description: '' }, 
        { name: 'Peanut Wong', img: 'member-5.webp', position: 'B.S.Sc. in Psychology', description: '' }
        ], 
      Alumni: [{ 
        degree: 'M.Phil. in Psychology',
        years: [
          { year: '2022', people: 'Frankie Mak' }, 
          { year: '2021', people: 'Alfred Lo' }, 
          { year: '2019', people: 'Alissa Ng' }
        ]}, { 
        degree: 'M.S.Sc. in Clinical Psychology',
        years: [
          { year: '2022', people: 'Cosy Cheung, Toby Jong, Jeff Kei, Janice Li, Jenny Ng, Kristine Yeung' }, 
          { year: '2021', people: 'Wingman Law, Ivy Leung, Alissa Ng, Melody Tsui' }, 
          { year: '2020', people: 'Eunice Ho, Stephanie Jor, Emily Sze' }, 
          { year: '2019', people: 'Nicky Chan, Pak Lun Ho' }, 
          { year: '2018', people: 'Daniel Cheng, Koey Cheung, Gina Siu, Victoria Tang' }, 
          { year: '2017', people: 'Ethiana Chung, Sarina Drummond, Cathy Kwok, Michael Ng' },       
          { year: '2016', people: 'Kahlen Chan, Sally Cheung, Yuki Ma' }       
        ]}, { 
        degree: 'M.A. in Psychology',
        years: [
          { year: '2022', people: 'Rachel Chan, Max Chau, Ching Ying Lee, Xiaojing Wu' }, 
          { year: '2021', people: 'Constance Ho, Jasmine Jim, Shirley So' }, 
          { year: '2020', people: 'Rachel Chong' }, 
          { year: '2015', people: 'Karen Chim, Ping Ping Chong, Yvonne Ngo, Baker Siu' } 
        ]}, { 
        degree: 'B.S.Sc. in Psychology',
        years: [
          { year: '2022', people: 'Harris Chung, Raymond Ho, Joshua Yiu' }, 
          { year: '2021', people: 'Torres Chan, Celia Ho, Joey Leung, Hilvin Yu' }, 
          { year: '2020', people: 'Kam Hei Hui, Charmaine Tsoi' }, 
          { year: '2019', people: 'Celia Siu' }, 
          { year: '2018', people: 'Marshall Hui, Michelle Zhao' }, 
          { year: '2017', people: 'Alfred Lo, Alissa Ng' }, 
          { year: '2016', people: 'Koey Cheung, Sammi Li' }, 
          { year: '2015', people: 'Aretha Chui, Eunice Ho' } 
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
      <main>
        <section class="banner">
          <div class="banner-overlay">
            <h1>Our Team</h1>
          </div>
        </section>
        <section class="body-container">
          <section id="chiu" class="wrapper-horizontal">
            <div class="title-box">Principal Investigator</div>
            <div class="flex-box">
              <div class="flex-250">
                <img src="./img/members/chiu.jpg" class="members-img" width="210" height="253">
              </div>
              <div class="flex-60">
                <span class="name">Prof. Chui-De CHIU</span>
                <span class="position">Associate Professor, CUHK</span>

                <p><a href="https://www.researchgate.net/profile/Chui-De-Chiu" target="_blank">ResearchGate</a> | 
                <a href="https://orcid.org/0000-0002-6159-8531" target="_blank">ORCID</a> | 
                <a href="https://scholar.google.com.hk/citations?user=Bug4OBUAAAAJ" target="_blank">Google Scholar</a></p>

                <p>{{CD.description}}</p>

                <div class="contact-box">
                  <div><i class="fa fa-envelope"></i><span class="contact-info">cdchiu@cuhk.edu.hk</span></div>
                  <div><i class="fa fa-phone"></i><span class="contact-info">3943-6210</span></div>
                </div>
              </div>
            </div>
          </section>

          <section id="members" class="wrapper-horizontal">
            <div class="title-box">Staff</div>
            <div class="people-card flex-box" v-for="person in Staff">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>

                <div class="contact-box">
                  <div><i class="fa fa-envelope"></i><span class="contact-info">{{person.email}}</span></div>
                  <div><i class="fa fa-phone"></i><span class="contact-info">{{person.tel}}</span></div>
                </div>
              </div>
            </div>

            <div class="title-box">Honorary Staff</div>
            <div class="people-card flex-box" v-for="person in HonStaff">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Research-track Postgraduates</div>
            <div class="people-card flex-box" v-for="person in RPg">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Clinical-track Postgraduates</div>
            <div class="people-card flex-box" v-for="person in CP">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Taught Postgraduates</div>
            <div class="people-grid">
              <div class="people-grid-item" v-for="person in MA">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
            </div>

            <div class="title-box">Undergraduate Thesis Students</div>
            <div class="people-card flex-box" v-for="person in UG">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Alumni</div>
            <div class="toggle-section" v-for="degree in Alumni">
              <h3 class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>{{degree.degree}}</h3>
              <div class="toggle-box">
                <table class="alumni-table">
                  <colgroup>
                    <col style="width:20%">
                    <col style="width:80%">
                  </colgroup> 
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="year in degree.years">
                      <td>{{year.year}}</td>
                      <td>{{year.people}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="toggle-section">
              <h3 class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>Other student helpers</h3>
              <div class="toggle-box">
                (Under construction...)
              </div>
            </div>

            <p>* sorted in alphabetical order of surname</p>
          </section>
        </section>
      </main>`}