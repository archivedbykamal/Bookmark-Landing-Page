const setCurrentTab = (tabNumber) => {
	const tabs = document.getElementById("items-names").children;
	const items = document.getElementById("items").children;
	const currentTabIndex = Array.from(tabs).findIndex((i) =>
		i.classList.contains("active")
	);

	items[currentTabIndex].classList.remove("active");
	tabs[currentTabIndex].classList.remove("active");

	items[tabNumber - 1].classList.add("active");
	tabs[tabNumber - 1].classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
	const emailField = document.getElementById("email");
	emailField.addEventListener("invalid", (e) => {
		e.preventDefault();
		document.getElementById("status").classList.add("invalid");
		emailField.classList.add("invalid-field");
	});
	emailField.addEventListener("input", (e) => {
		if (emailField.validity.valid) {
			document.getElementById("status").classList.remove("invalid");
			emailField.classList.remove("invalid-field");
		}
	});

	document.querySelectorAll(".collapse-icon").forEach((navCollapseButton) => {
		navCollapseButton.addEventListener("click", () => {
			const desktopHeader = document.getElementById("desktop-header");
			const mobileHeader = document.getElementById("mobile-header");
			if (navCollapseButton.classList.contains("active")) {
				mobileHeader.children[0].classList.add("collapse-animate");
				setTimeout(() => {
					desktopHeader.classList.remove("hide");
					mobileHeader.classList.remove("show");
					mobileHeader.children[0].classList.remove("collapse-animate");
				}, 800);
			} else {
				mobileHeader.classList.add("show");
				desktopHeader.classList.add("hide");
			}
		});
	});
	document.getElementById("email-form").addEventListener("submit", (e) => {
		e.preventDefault();
		console.log(e);
	});
});
