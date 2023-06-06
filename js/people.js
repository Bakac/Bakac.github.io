export default {
  created () {
    document.title = 'Our Team | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
  },
  data() {
    return {
      imgpath: './img/members/',
      CD: {
        img: 'chiu.webp', position: 'Associate Professor, CUHK', description: 'Trained in applying experimental approaches to delineating the cognitive mechanisms of psychopathology, his clinical and research interests concern the impact of aversive interpersonal experience and stressful life events on mental health. His current research focuses on exploring the role of dysfunctional self-regulation (e.g., self-esteem, shame, and self-versus-other boundary) in stress-related disorders such as post-traumatic stress disorder, dissociative disorders, and borderline personality disorder.'
      },
      Staff: [
        { name: 'Frankie Mak', img: 'mak-frankie.webp', position: 'Research Associate', description: 'He obtained his Bachelor’s degree and M.Phil. degree in CUHK. He is interested in the cognitive underpinnings of mentalising ability and the situations that turn it on and off. With knowledge in these areas, he wants to develop low-intensity assessment and possible training tools to raise public awareness of different relational issues.', email: 'frankie.cdclab@gmail.com', tel: '3943-3507'}, 
        { name: 'Harris Chung', img: 'chung-harris.webp', position: 'Research Assistant', description: 'Working under the supervision of Prof. Chiu, he has previously completed an undergraduate thesis investigating the relationship among self-esteem, social feedback and heart rate variability. His research focuses on the implication of physiological response in the context of social cognition.', email: 'harris.cdclab@gmail.com', tel: '3943-3507'}
        ],
      HonStaff: [
        { name: 'Eunice Ho', img: 'ho-eunice.webp', position: 'Honorary Clinical Consultant', description: 'She is a clinical psychologist who enjoys working with children, adolescents, and their families. She is currently working with a group of children and their caregivers with adverse relational experiences. Her clinical and research interest lies in the development of trauma psychopathology and the contributive role that sociocognitive functioning plays in its formation.'},
        { name: 'Cathy Kwok', img: 'kwok-cathy.webp', position: 'Honorary Clinical Consultant', description: 'She is a clinical psychologist working in a residential care setting serving children and families with adverse childhood experiences. She is interested in understanding the developmental trajectory of trauma spectrum disorders, as well as the application and consolidation of a therapeutic approach for children that targets the dysfunctional self and other representations.'},
        { name: 'Alissa Ng', img: 'ng-alissa.webp', position: 'Honorary Clinical Consultant', description: 'During previous research studies, she explored the role of visuospatial perspective shifting in empathy and self-empathy. She is now a clinical psychologist working with at-risk adolescents in a community setting. There she continues her interest in exploring the processes and impact of how people relate with themselves and those around them.'} 
        ], 
      RPg: [
        { name: 'Yimei Zhang', img: 'zhang-yimei.webp', position: 'Ph.D. in Psychology (Post-candidacy)', description: 'She is interested in how people with mental illness, such as borderline personality disorder, build up intimate relationships, and how they communicate with their intimate partners. She hopes her research can help people with mental illness develop healthy relationships in which they can perceive support and acquire improvement.'}, 
        { name: 'Kam Hei Hui', img: 'hui-kamhei.webp', position: 'Ph.D. in Psychology (Pre-candidacy)', description: 'Obtaining his Bachelor’s degree in CUHK, he is passionate in knowing how people imagine their future. He hopes to boost people’s determination and confidence to pursue their goals through update of autobiographical knowledge and biofeedback.'}, 
        { name: 'Celia Siu', img: 'siu-celia.webp', position: 'M.Phil. in Psychology', description: 'She is interested in people’s relationship with the self. During undergraduate study, she studied the individual difference of people’s attitude toward an unfavourable aspect of themselves. Currently, she is studying how childhood relational trauma and perceived loneliness may contribute to self-directed violence (suicide).'}
        ], 
      CP: [
        { name: 'Bianca Chan', img: 'chan-bianca.webp', position: 'Psy.D. in Clinical Psychology', description: 'She is a clinical psychologist working in the child & adolescent team of a psychiatric hospital. She is interested in working with adolescents with attachment difficulties, especially those with evolving borderline personality traits. She is currently studying the role of dissociation in adolescent mental health disorders. She is also a plant lover.' }, 
        { name: 'Daniel Chan', img: 'chan-daniel.webp', position: 'Psy.D. in Clinical Psychology', description: 'Working in the public sector, he provides psychological service for individuals and families in need. His research is aimed at enhancing the understanding of how adverse childhood experiences impact mental health in adulthood, with a focus on childhood trauma and self-regulation. In his free time, he enjoys all sorts of outdoor activities.' }, 
        { name: 'Jessica Chan', img: 'chan-jessica.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She is interested in the concept of metalization and the impact of interpersonal functioning in both clinical and non-clinical population. Currently, she is researching on how attachment styles would affect perceived responsiveness within intimate relationships.' }, 
        { name: 'Celia Ho', img: 'ho-celia.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She is interested in how physiological changes predict social emotional processes. She has been researching on heart rate variability (HRV) in both her undergraduate and postgraduate studies. Currently, she is studying the relationships between HRV and somatization.' }, 
        { name: 'Florence Huang', img: 'huang-florence.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She is interested in experimental studies especially in areas of culturally sensitive code-switching response to sociolinguistic differences, and application of gamification in mental health and education. Also, she is a fan of creative board games. Currently, she is studying how the emotion mind-reading ability between parents and children may associate with their emotional states and parent-child relationships.' }, 
        { name: 'Rachel Chong', img: 'chong-rachel.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'Senior learner, research newbie. She loves stories of human experiences, which transformed into her research interest. She looks into children’s stories for more understanding of the development of ‘self’, especially their socioemotional development, and how childhood trauma affects one’s relational knowledge. Good food and cat cuddles made her day.' }, 
        { name: 'Raymond Ho', img: 'ho-raymond.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'He is interested in understanding human in computational approaches. During his undergraduate study, he studied the relationship between self-referential source memory and emotional empathy. He is now studying the cognitive underpinnings in the development of emotional recognition. He likes statistics, science, and karaoke.' }, 
        { name: 'Terry Lau', img: 'lau-terry.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She obtained her bachelor’s degree and masters’ degree in psychology and clinical mental health sciences at the University College London. Her research interests lie in eating disorders and borderline personality disorder. Her personal interests lie in brewing coffee, and any activities that requires a strong heart. She might also be taller than you think.' }, 
        { name: 'Kristin Ng', img: 'ng-kristin.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'Her research interest is in adverse life experience and the development of trauma-spectrum disorders and psychosis. She has always been fascinated by how temperament and environment shape a person’s relation to self, others and the world. She loves a nice hike, wine and true crime.' }, 
        { name: 'Tracy Tso', img: 'tso-tracy.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She previously obtained her MA degree in CUHK and completed a thesis about the interaction between affect and inner speech in people with schizophrenia. She is currently receiving training in clinical psychology and has a particular interest in the interaction between trauma and the development of self. She is also a yoga practitioner and a potter.' },
        { name: 'Charmaine Tsoi', img: 'tsoi-charmaine.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She obtained her Bachelor’s degree in CUHK. Her previous research studied the relationship between attachment styles and how one relates to the self. She enjoys working with children. She also loves eating, crocheting, and watching drama.' }
        ],
      MA: [
        { name: 'Emily Chan', img: 'MA/2022-chan-emily.webp', position: 'M.A. in Psychology', description: 'She is interested in the topic of Emotional Regulation. She would like to know how emotional regulation in daily life affects our well-being. Given that “Emotional Intelligence” (EQ) has been widely prevalent in recent years and numerous research shows that having high EQ is critical for achieving success and healthy interpersonal relations.' }, 
        { name: 'Karly Chuang', img: 'MA/2022-chuang-karly.webp', position: 'M.A. in Psychology', description: 'Graduated from the University of Hong Kong, she decided to pursue a master program in Psychology as she is naturally curious about how human character or behavior can be explained by their condition, and ultimately how that plays in the human relationship.' }, 
        { name: 'Christine Chow', img: 'MA/2022-chow-christine.webp', position: 'M.A. in Psychology', description: 'Christine (she/her) is a part-time MA student in her year 2. Working for a suicide prevention agency, she is passionate about raising mental awareness in the community and aspires to become a psychotherapist one day. She is particularly interested in studying childhood trauma, parenting and intimate relationships.' }, 
        { name: 'Emily Chung', img: 'MA/2022-chung-emily.webp', position: 'M.A. in Psychology', description: 'Emily is currently a Year 1 full time student studying for a MA in Psychology. She has previously conducted research about the underlying psychological mechanisms of a highly polarised political environment in the domain of Socioecological Psychology for her dissertation. Currently, she is investigating the relationship between alexithymia, Borderline Personality Disorder and working memory.' }, 
        { name: 'Emma Lau', img: 'member-6.webp', position: 'M.A. in Psychology', description: 'Emma is interested in exploring more about how various mental health issues and personalities affect relationships, learning and life.' }, 
        { name: 'Vickie Lee', img: 'MA/2022-lee-vickie.webp', position: 'M.A. in Psychology', description: 'She’s interested in the associations between childhood events and mental illnesses, such as borderline personality disorder, and how relevant symptoms prevail in adult relationships. She aspires to explore ways to improve mental wellbeing through building healthy and supportive relationships.' }, 
        { name: 'Wayne Lee', img: 'MA/2022-lee-wayne.webp', position: 'M.A. in Psychology', description: 'Wayne is a second year part-time student of MA in Psychology. He is naturally curious about the complexities and intricacies of the human mind, especially the association between childhood traumas and relationship patterns.' }, 
        { name: 'Elaine To', img: 'MA/2022-to-elaine.webp', position: 'M.A. in Psychology', description: 'She is fascinated by how people’s thinking process can lead to very different behaviors and consequences in the same situation. She believes that knowledge in psychology is essential in guiding people through traumatic lifetime changes. She is interested in the association between childhood trauma, emotional regulation and relationship patterns.' }
        ],
      UG: [
        { name: 'Hazel Lee', img: 'lee-hazel.webp', position: 'B.S.Sc. in Psychology', description: 'Hazel is currently a psychology UG student. She is interested in studying the relationship between attachment styles and the expression of aggression. She likes cats.' }, 
        { name: 'Isla Wong', img: 'wong-isla.webp', position: 'B.S.Sc. in Psychology', description: 'She is interested in how unhealthy parenting practices are perpetuated inter-generationally, and their effect on adolescents’ mental health. Her undergraduate thesis place emphasis on how maltreatment contributes to teenagers’ borderline personality traits.' }, 
        { name: 'Peanut Wong', img: 'wong-peanut.webp', position: 'B.S.Sc. in Psychology', description: 'She is curious about how people subjectively understand their own minds is related to their understanding of others’ mental states. Her undergraduate thesis aims to explore the dynamics between emotional ascription and perspective-taking.' }
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
                <img :src="imgpath + CD.img" class="members-img" width="210" height="253">
              </div>
              <div class="flex-60">
                <span class="name">Prof. Chui-De CHIU</span>
                <span class="position">{{CD.position}}</span>

                <p style="margin-bottom: 8px"><a href="https://www.researchgate.net/profile/Chui-De-Chiu" target="_blank">ResearchGate</a> | 
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
            <div class="people-card flex-box" v-for="person in MA">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
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
              <p class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>{{degree.degree}}</p>
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
              <p class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>Other student helpers</p>
              <div class="toggle-box">
                (Under construction...)
              </div>
            </div>

            <p>* sorted in alphabetical order of surname</p>
          </section>
        </section>
      </main>`}