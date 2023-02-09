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
          <section id="project1">
            <div class="card wrapper-horizontal flex-box">
              <div class="flex-60">
                <h2>Pariticipants</h2>
                <p>(Under construction...)</p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>

          <section id="project2" class="dark">
            <div class="card wrapper-horizontal flex-box flex-box-reverse">
              <div class="flex-60">
                <h2>Volunteers</h2>
                <p>(Under construction...)</p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>

          <section id="project3">
            <div class="card wrapper-horizontal flex-box">
              <div class="flex-60">
                <h2>Prospective students/labmate</h2>
                <p>(Under construction...)</p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>

          <section id="project4">
            <div class="card wrapper-horizontal flex-box flex-box-reverse">
              <div class="flex-60">
                <h2>Collaborators</h2>
                <p>(Under construction...)</p>
              </div>

              <div class="flex-40">
                <img class="img-center max-height-300" src="./img/project-1.png" width="1920">
              </div>
            </div>
          </section>
        </section>
      </main>`
}