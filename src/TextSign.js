export default class TextSign {
	constructor() {
		this.elem = document.createElement('div');
		this.elem.classList.add('text-sign');
		this.elem.style.transform = `translate(${Math.random() * window.innerWidth * 0.8}px, ${Math.random() * window.innerHeight * 0.8}px)`;
		document.body.appendChild(this.elem);
	}
}
