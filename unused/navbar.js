export default {
	data() {
		return {
			links: [
				{ title: 'Home', href: './?page=home'}, 
				{ title: 'Research', href: './?page=research'}, 
				{ title: 'Services', href: './?page=services'}, 
				{ title: 'Publications', href: './?page=publications'}, 
				{ title: 'People', href: '#', children: [{ title: 'Principal Investigator', href: './?page=chiu'}, { title: 'Members', href: './?page=members'}]}, 
				{ title: 'Contact', href: './?page=contact'}
			]
		}
	},
	template: `
			<nav>
				<div id="logo">
					<img src="./img/logo.webp" alt="">
					<div id="labname"><span>Experimental Psychopathology and Psychotherapy Laboratory</span></div>
				</div>
				<ul>
					<li v-for="link in links" :class="{dropdown: link.href == '#'}">
						<a :href="link.href" @click.prevent="$emit('clickPage', link.href)">{{link.title}} <i v-if="link.href == '#'" class="fa fa-caret-down"></i></a>
						<div class="dropdown-content" v-if="link.href == '#'">
							<a v-for="child in link.children" :href="child.href" @click.prevent="$emit('clickPage', child.href)">{{child.title}}</a>
						</div>
					</li>
				</ul>
			</nav>`
}