export default {
  props: {
    labname: String
  },
  data() {
    return {
      CD: {
        description: `Trained in applying experimental approaches to delineating the cognitive mechanisms of psychopathology, his clinical and research interests concern the impact of aversive interpersonal experience and stressful life events on mental health. His current research focuses on exploring the role of dysfunctional self-regulation (e.g., self-esteem, shame, and self-versus-other boundary) in stress-related disorders such as post-traumatic stress disorder, dissociative disorders, and borderline personality disorder.`
      },
      Staff: [
        { name: 'Frankie Mak', img: './img/mak-frankie.jpg', position: 'Research Associate', description: 'He obtained both his Bachelor’s degree and M.Phil. degree in CUHK. He is interested in how implicit self-rejection is developed in an individual, and the cognitive and behavioural outcomes of self-rejection. With the knowledge in these areas, he wants to develop low-intensity assessment and treatment tools to help people in the general public cope with their socio-emotional issues.'}, 
        { name: 'Harris Chung', img: './img/avatar.jpeg', position: 'Research Assistant', description: 'Description'},
        { name: 'Eunice Ho', img: './img/avatar.jpeg', position: 'Honorary Clinical Consultant', description: ''},
        { name: 'Cathy Kwok', img: './img/avatar.jpeg', position: 'Honorary Clinical Consultant', description: ''},
        { name: 'Alissa Ng', img: './img/avatar.jpeg', position: 'Honorary Research Assistant', description: ''}
        ], 
      RPg: [
        { name: 'Yimei Zhang', img: './img/zhang-yimei.jpeg', position: 'Ph.D. in Psychology', description: 'She is interested in how people with mental illness, such as borderline personality disorder, build up intimate relationships, and how they communicate with their intimate partners. She hopes her research can help people with mental illness develop healthy relationships in which they can perceive support and acquire improvement.'}, 
        { name: 'Kam Hei Hui', img: './img/hui-kamhei.png', position: 'Ph.D. in Psychology', description: 'Obtaining his Bachelor’s degree in CUHK, he is passionate in knowing how people imagine their future. He hopes to boost people’s determination and confidence to pursue their goals through update of autobiographical knowledge and biofeedback.'}, 
        { name: 'Celia Siu', img: './img/siu-celia.jpeg', position: 'M.Phil. in Psychology', description: 'She is interested in people’s relationship with the self. During undergraduate study, she studied the individual difference of people’s attitude toward an unfavourable aspect of themselves. Currently, she is studying how childhood relational trauma and perceived loneliness may contribute to self-directed violence (suicide).'}
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
        { name: 'Kristin Ng', img: './img/avatar.jpeg', position: 'M.S.Sc. in Clinical Psychology' }, 
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
          { year: '2016', people: 'Kahlen Chan, Sally Cheung' }       
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
            <h1>People</h1>
          </div>
        </section>
        <section class="body-container">
          <section id="chiu" class="wrapper-horizontal">
            <div class="title-box">Principal Investigator</div>
            <div class="flex-box">
              <div class="flex-250">
                <img src="./img/chiu.jpg">
              </div>
              <div>
                <span class="name">Prof. Chui-De CHIU</span>
                <span class="position">Associate Professor, CUHK</span>

                <p><a href="https://www.researchgate.net/profile/Chui-De-Chiu" target="_blank">ResearchGate</a> | 
                <a href="https://orcid.org/0000-0002-6159-8531" target="_blank">ORCID</a> | 
                <a href="https://scholar.google.com.hk/citations?user=Bug4OBUAAAAJ" target="_blank">Google Scholar</a></p>

                <p>{{CD.description}}</p>

                <div id="contact-box">
                  <i class="fa fa-envelope"></i><span class="contact-info">cdchiu@psy.cuhk.edu.hk</span>
                  <i class="fa fa-phone"></i><span class="contact-info">3943-6210</span>
                </div>
              </div>
            </div>
          </section>

          <section id="members" class="wrapper-horizontal">
            <div class="title-box">Staff</div>
            <div class="people-card flex-box" v-for="person in Staff">
              <div class="flex-250">
                <img :src="person.img" width="250">
              </div>
              <div>
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Research-track Postgraduates</div>
            <div class="people-card flex-box" v-for="person in RPg">
              <div class="flex-250">
                <img :src="person.img" width="250">
              </div>
              <div>
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
          </section>
        </section>
      </main>`}