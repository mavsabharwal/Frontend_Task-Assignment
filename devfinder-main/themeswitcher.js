const btn = document.querySelector(".themeswitcher-btn");
console.log(btn);

// Local storage check
const currentTheme = localStorage.getItem("currentTheme");
if (currentTheme == "dark") {
	document.body.classList.add("dark");
} else {
	document.body.classList.remove("dark");
}

// System preferences check
let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// Only apply prefersDark if localStorage is not set. User click overrides default system preference.
if (localStorage.getItem("currentTheme") === null) {
	if (prefersDark === true) {
		localStorage.setItem("currentTheme", "dark");
	} else {
		localStorage.setItem("currentTheme", "light");
	}
}

function change() {
	const dark = document.body.classList.contains("dark");
	console.log(dark);

	if (document.body.classList.contains("dark")) {
		document.body.classList.remove("dark");
		localStorage.setItem("currentTheme", "light");
	} else {
		document.body.classList.add("dark");
		localStorage.setItem("currentTheme", "dark");
	}
}

btn.addEventListener("click", change);
