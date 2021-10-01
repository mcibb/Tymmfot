const gallery = document.querySelector('.photocontainer');
const overlay = document.querySelector('.image-viewer');

gallery.addEventListener('click', ({ target: { src } }) => {
	if (src) {
		const img = document.createElement('img');
		img.src = src;

		overlay.appendChild(img);
		overlay.classList.toggle('is-visible');
	}
});

overlay.addEventListener('click', ({ target }) => {
	if (target === overlay) {
		overlay.classList.toggle('is-visible');

		while (overlay.firstChild) {
			overlay.removeChild(overlay.firstChild);
		}
	}
});

let btn = document.querySelector(".contact");
let panel = document.querySelector(".contact-panel");
btn.addEventListener("mouseover", () => {
	panel.style.display = "flex";
})

btn.addEventListener("mouseleave", () => {
	panel.style.display = "none";
	
})

panel.addEventListener("mouseover", () => {
	panel.style.display = "flex";
})

panel.addEventListener("mouseleave", () => {
	panel.style.display = "none";
	
})
