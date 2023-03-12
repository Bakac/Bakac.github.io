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
			<section class="banner">
				<div class="banner-overlay">
					<h1>Contact</h1>
				</div>
			</section>
			<section class="body-container">
				<section id="contact" class="wrapper-horizontal flex-box">
					<div class="flex-60">
						<h3>Address</h3>
						<p>Rm 102, Wong Foo Yuan Building<br>
						The Chinese University of Hong Kong<br>
						Shatin, N.T.<br>
						Hong Kong SAR</p>

						<h3>Phone</h3>
						<p>3943-3507</p>
					</div>
					<div class="flex-40">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3732361161433!2d114.20527311504736!3d22.414973644386393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404089d8c0d8623%3A0xcceaf3d289427bbd!2z5rKZ55Sw5bSH5Z-66Lev546L56aP5YWD5qiT!5e0!3m2!1szh-TW!2shk!4v1670808888909!5m2!1szh-TW!2shk" width="400" height="300" style="border:0; margin: 0 auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</section>
			</section>
		</main>`
}