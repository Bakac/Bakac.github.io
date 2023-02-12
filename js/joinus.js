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
            <h1>We Need You!</h1>
          </div>
        </section>
        <section class="body-container flex-stack">
          <section id="joinus-participant">
            <div class="card wrapper-horizontal flex-box">
              <div class="flex-60">
                <h2>Participants</h2>
                <p>We are now recruiting participants for the following projects:</p>
                <p><b>Recruiting female participants with Borderline Personality Disorder or related traits</b><br>Details: <a href="http://esurvey.psy.cuhk.edu.hk/jfe/form/SV_9NdyWrZvdWZmLYy" target="_blank">Click me!</a></p>
                <p><b>Join a Parent-Child study, Child aged 8-12, 3hr experiment with $350 reward ❗️❕</b><br>Details: <a href="https://forms.gle/5uC4r9tpU1S67h2C8" target="_blank">Click me!</a></p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>

          <section id="joinus-volunteer" class="dark">
            <div class="card wrapper-horizontal flex-box flex-box-reverse">
              <div class="flex-60">
                <h2>Student Volunteers</h2>
                <p>We are looking for student volunteers who are passionate to learn more about psychopathology and promote mental health. Ideally, student volunteers should commit at least 8 hours per week to various lab tasks, such as data collection, data entry, audio transcription, and literature review.</p>
                <p>If you are interested, please write to us about yourselves and your research interest, together with your CV and latest transcript. Please send them to Harris (<span class="highlight">harris.cdclab@gmail.com</span>) or Frankie (<span class="highlight">frankie.cdclab@gmail.com</span>).</p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>

          <section id="joinus-labmate">
            <div class="card wrapper-horizontal flex-box">
              <div class="flex-60">
                <h2>Prospective Students and Staff</h2>
                <p>We welcome prospective research students (M.Phil., Ph.D.), clinical students (M.S.Sc., Psy.D.), and taught degree students (B.S.Sc., M.A.) who want to complete their theses/dissertations in this laboratory to approach us for further details.</p>
                <p>If you are interested in joining us as a research staff, you can refer to the website of the Human Resources Office (<span class="highlight">https://www.hro.cuhk.edu.hk/en-gb/career/career-opportunities</span>). We will post an advertisement on the website if there is a job vacancy.</p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>

          <section id="joinus-collaborator" class="dark">
            <div class="card wrapper-horizontal flex-box flex-box-reverse">
              <div class="flex-60">
                <h2>Collaborators</h2>
                <p>We are open to collaborating with current research students, junior and senior researchers, and clinicians in the design, implementation, and analysis of research projects related to psychopathology and psychotherapy. </p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>
        </section>
      </main>`
}