//import { Splide, SplideSlide } from 'https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/+esm'
import { Splide, SplideSlide } from './vuesplide.js'

export default {
	components: {
		Splide, SplideSlide
	},
	created () {
		document.title = 'Home | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
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
							<span><span class="home-smalltitle">BIG IDEAS</span></span>
							<h1>Understanding the making of the self and its relation to mental disorders</h1>
							<span class="home-subtitle">People learn who they are through feedback from others, and the resulting self-representations guide their social functioning. Through translational research, we examine how maladaptive self-representations develop and affect people with trauma-related disorders, and how they can be properly treated.</span>
							<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=ideas')">Learn More →</span>
						</div>
						<div id="home-research-banner" class="flex-40">
							<img src="./img/home-banner-self.webp" width="1920" alt="">
						</div>
					</div>
				</section>

				<section class="body-container">
					<section id="home-people" class="wrapper-horizontal flex-box">
						<div class="flex-40">
							<h2>Our Team</h2>
							<p>Our laboratory includes research staff, research students, clinical students, and clinical psychologists who are now working in different settings.</p>
							<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=people')">Meet Our Team →</span>
						</div>
						<div class="flex-60">
							<splide :options="{ type: 'fade', rewind: true, speed: 2000, arrows: false, drag: false, autoplay: true, interval: 4000, pauseOnHover: false, pauseOnFocus: false, lazyLoad: 'sequential' }" aria-label="Services">
								<splide-slide><img src="./img/home/lab-photo-2023-06.jpg" width="636" height="358" alt=""><span class="splide-description">Jun 2023</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2023-05.jpg" width="636" height="358" alt=""><span class="splide-description">May 2023</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2022-06.jpg" width="636" height="358" alt=""><span class="splide-description">Jun 2022</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2018-12.jpg" width="636" height="358" alt=""><span class="splide-description">Dec 2018</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2017-12.jpg" width="636" height="358" alt=""><span class="splide-description">Dec 2017</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2017-09.jpg" width="636" height="358" alt=""><span class="splide-description">Sep 2017</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2016-12.jpg" width="636" height="358" alt=""><span class="splide-description">Dec 2016</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2016-10.jpg" width="636" height="358" alt=""><span class="splide-description">Oct 2016</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/lab-photo-2015-05.jpg" width="636" height="358" alt=""><span class="splide-description">May 2015</span></splide-slide>
							</splide>
						</div>
					</section>

					<section id="home-services" class="wrapper-horizontal flex-box flex-box-reverse">
						<div class="flex-40">
							<h2>Our Services</h2>
							<p>We provide a wide range of services to the community and service units, including training workshops and mental health service delivery model development.</p>
							<button class="home-btn center-align" @click.prevent="$emit('clickPage', './?page=services')">Learn More →</span>
						</div>
						<div class="flex-60">
							<splide :options="{ type: 'fade', rewind: true, speed: 2000, arrows: false, drag: false, autoplay: true, interval: 4000, pauseOnHover: false, pauseOnFocus: false, lazyLoad: 'sequential' }" aria-label="Services">
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2023-05.jpg" width="636" height="358" alt=""><span class="splide-description">May 2023 - Chiayi, Taiwan</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2022-12-1.jpg" width="636" height="358" alt=""><span class="splide-description">Dec 2022 - BOKSS Workshop</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2022-12-3.jpg" width="636" height="358" alt=""><span class="splide-description">Dec 2022 - BOKSS Workshop</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2022-12-2.jpg" width="636" height="358" alt=""><span class="splide-description">Dec 2022 - HKCS Workshop</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2022-06.jpg" width="636" height="358" alt=""><span class="splide-description">Jun 2022 - NTU-CUHK Mix-mode Seminar</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2020-11.jpg" width="636" height="358" alt=""><span class="splide-description">Nov 2020 - HKCS Workshop</span></splide-slide>
								<splide-slide><img data-splide-lazy="./img/home/service-photo-2019-05.jpg" width="636" height="358" alt=""><span class="splide-description">May 2019 - SWD Workshop</span></splide-slide>
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

							<p>Tel: (+852) 3943-3507</p>
						</div>
						<div class="flex-40">
							<img src="./img/cuhk-map.webp" width="1920" alt="" loading="lazy">
						</div>
					</section>
				</section>
				<link href="https://cdn.jsdelivr.net/npm/@splidejs/vue-splide@0.6.12/dist/css/splide.min.css" rel="stylesheet">
			</main>`
}