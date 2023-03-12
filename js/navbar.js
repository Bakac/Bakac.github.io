export default {
	data() {
		return {
			links: [
				{ title: 'Home', href: './?page=home'}, 
				{ title: 'Team', href: './?page=people'}, 
				{ title: 'Ideas', href: './?page=ideas'}, 
				{ title: 'Assessments', href: './?page=assessments'}, 
				{ title: 'Services', href: './?page=services'}, 
				{ title: 'Publications', href: './?page=publications'}, 
				{ title: 'We Need You!', href: './?page=joinus'}
			], 
			isShow: false
		}
	},  
	methods: {
	    showNav() {
	      this.isShow = true;
	    }, 
	    hideNav() {
	      this.isShow = false;
	    }
  	},
	template: `
			<nav>
				<div id="logo">
					<img src="./img/logo.webp" alt="">
					<div id="labname"><span>Experimental Psychopathology and Psychotherapy Laboratory</span></div>
				</div>
				<ul :class="{opened: isShow}">
					<li v-for="link in links" :class="{dropdown: link.href == '#', emphasis: link.title == 'We Need You!'}">
						<a :href="link.href" @click.prevent="$emit('clickPage', link.href); hideNav()">{{link.title}} <i v-if="link.href == '#'" class="fa fa-caret-down"></i></a>
						<div class="dropdown-content" v-if="link.href == '#'">
							<a v-for="child in link.children" :href="child.href" @click.prevent="$emit('clickPage', child.href)">{{child.title}}</a>
						</div>
					</li>
					<span class="cross" @click="hideNav()"></span>
				</ul>
				<span class="hamburger" @click="showNav()"><i class="fa fa-bars"></i></span>
			</nav>`
}