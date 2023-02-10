//import { Splide, SplideSlide } from 'https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/+esm'
import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
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
					<div id="home-research-flex" class="wrapper-horizontal flex-box align-center">
						<div class="banner-overlay left-align flex-40">
							<h1>How do we process relations with others and the self?</h1>
							<span class="home-subtitle">We are interested in the cognitive bases and social development involved in relational processing, which are important for understanding trauma-related disorders.</span>
							<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=research')">Learn More</span>
						</div>
						<div id="home-research-banner" class="flex-40">
							<img src="./img/home-banner.webp" width="1920" alt="">
						</div>
					</div>
				</section>

				<section class="body-container">
					<section id="home-people" class="wrapper-horizontal flex-box">
						<div class="flex-40">
							<h2>Our Team</h2>
							<p>Our laboratory includes research staff, research students, clinical students, and clinical psychologists who are now working in different settings.</p>
							<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=people')">Meet The Team</span>
						</div>
						<div class="flex-60">
							<splide :options="{ type: 'fade', rewind: true, speed: 2000, arrows: false, drag: false, autoplay: true, interval: 4000, pauseOnHover: false, pauseOnFocus: false, lazyLoad: 'sequential' }" aria-label="Services">
								<splide-slide><img src="./img/lab-photo-2022-06.jpg" width="1920" alt=""></splide-slide>
								<splide-slide><img data-splide-lazy="./img/lab-photo-2018-12.jpg" width="1920" alt=""></splide-slide>
								<splide-slide><img data-splide-lazy="./img/lab-photo-2017-12.jpg" width="1920" alt=""></splide-slide>
								<splide-slide><img data-splide-lazy="./img/lab-photo-2017-09.jpg" width="1920" alt=""></splide-slide>
								<splide-slide><img data-splide-lazy="./img/lab-photo-2016-10.jpg" width="1920" alt=""></splide-slide>
							</splide>
						</div>
					</section>

					<section id="home-services" class="wrapper-horizontal flex-box flex-box-reverse">
						<div class="flex-40">
							<h2>Our Services</h2>
							<p>We provide a wide range of services to the community and service units, including training workshops and mental health service delivery model development.</p>
							<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=services')">Learn More</span>
						</div>
						<div class="flex-60">
							<splide :options="{ type: 'fade', rewind: true, speed: 2000, arrows: false, drag: false, autoplay: true, interval: 4000, pauseOnHover: false, pauseOnFocus: false, lazyLoad: 'sequential' }" aria-label="Services">
								<splide-slide><img data-splide-lazy="./img/service-photo-2022-12-1.jpg" width="1920" alt=""></splide-slide>
								<splide-slide><img data-splide-lazy="./img/service-photo-2022-12-2.jpg" width="1920" alt=""></splide-slide>
								<splide-slide><img data-splide-lazy="./img/service-photo-2022-12-3.jpg" width="1920" alt=""></splide-slide>
							</splide>
						</div>
					</section>

					<section id="contact" class="wrapper-horizontal flex-box">
						<div class="flex-60">
							<h2>Contact Us</h2>

							<p>臨床心理科學實驗室<br>
							香港新界沙田香港中文大學王福元樓102室</p>

							<p>Experimental Psychopathology and 
							<br>Psychotherapy Laboratory</p>

							Room 102, Wong Foo Yuan Building<br>
							The Chinese University of Hong Kong<br>
							Shatin, N.T., Hong Kong SAR</p>
							
							<p>Tel: 3943-3507</p>
						</div>
						<div class="flex-40">
							<img src="./img/cuhk-map.webp" width="1920" alt="" loading="lazy">
						</div>
					</section>
				</section>
			</main>

			<link href="https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/dist/css/splide.min.css" rel="stylesheet">`
}