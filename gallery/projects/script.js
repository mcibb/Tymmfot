let btn = document.querySelector(".contact");
let panel = document.querySelector(".contact-panel");
let nav = document.querySelector(".nav")

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



