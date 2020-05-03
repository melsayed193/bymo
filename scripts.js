let home = document.querySelector('.nav-home')
let work = document.querySelector('.nav-work')
let contact = document.querySelector('.nav-contact')

home.addEventListener('click', function() {
	document.body.id = ''
})

work.addEventListener('click', function() {
	document.body.id = 'work-active'
})

contact.addEventListener('click', function() {
	document.body.id = 'contact-active'
})


let projects = document.querySelectorAll('.project')

for (let i = 0; i < projects.length; i++) {
	projects[i].addEventListener('click', function() {
		let img = this.querySelector('.project-image').innerHTML
		let name = this.querySelector('.project-name').innerHTML
		let text = this.querySelector('.project-text').innerHTML
		let detail = document.querySelector('.work-detail')
		detail.innerHTML = ''
		let detailContent = `<div class="detail-name">${name}</div>
		<div class="detail-text">${text}</div>
		<div class="detail-image">${img}</div>`
		detail.innerHTML = detailContent
		document.querySelector('.work').id = 'detail-active'
	})
}