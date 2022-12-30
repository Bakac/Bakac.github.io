export default {
  props: {
    labname: String
  },
  data() {
    return {
      
    }
  },
  template: `
      <main>
        <section id="home-research" class="banner">
          <div id="home-research-banner">
            <img src="./img/home-banner.webp" width="1920" alt="">
          </div>
          <div class="banner-overlay left-align wrapper-horizontal">
            <h1>How do we process relations with others and the self?</h1>
            <span class="home-subtitle">We are interested in the cognitive bases and social development involved in relational processing, which are important for understanding stress-related mental disorders.</span>
            <button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=research')">Learn More</span>
          </div>
        </section>

        <section class="body-container">
          <section id="home-people" class="wrapper-horizontal flex-box">
            <div class="flex-40">
              <h2>Our Team</h2>
              <p>Our laboratory includes research staff, research students, clinical students, and clinical psychologists who are now working in different settings.</p>
              <button class="center-align" @click.prevent="$emit('clickPage', './?page=people')">Meet The Team</span>
            </div>
            <div class="flex-60"><img src="./img/lab-photo.webp" width="1920" alt=""></div>
          </section>

          <section id="home-services" class="wrapper-horizontal flex-box">
            <div class="flex-60"><img src="./img/.webp" width="1920" alt=""></div>
            <div class="flex-40">
              <h2>Services</h2>
              <p>We provide different services to the community, including service model development and training workshops.</p>
              <button class="center-align" @click.prevent="$emit('clickPage', './?page=services')">Learn More</span>
            </div>
          </section>

          <section id="contact" class="wrapper-horizontal flex-box">
            <div class="flex-40">
              <h2>Contact Us</h2>
              <p>Room 102, Wong Foo Yuan Building<br>
              The Chinese University of Hong Kong<br>
              Shatin, N.T.<br>
              Hong Kong SAR</p>
              <p>Tel: 3943-3507</p>
            </div>
            <div class="flex-60">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3732361161433!2d114.20527311504736!3d22.414973644386393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404089d8c0d8623%3A0xcceaf3d289427bbd!2z5rKZ55Sw5bSH5Z-66Lev546L56aP5YWD5qiT!5e0!3m2!1sen!2sen!4v1670808888909!5m2!1sen!2sen" width="500" height="300" style="border:0; margin: 0 auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </section>
      </main>`
}