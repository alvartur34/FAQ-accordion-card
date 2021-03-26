"use strict";

const faqImgBg = document.getElementById("faq-bg-img");
const faqImgWoman = document.getElementById("woman-faq-img");
const faqTitle = document.getElementById("faqTitle");

if (window.screen.width >= "768") {
	faqImgBg.src = "img/bg-pattern-desktop.svg";
	faqImgWoman.src = "img/illustration-woman-online-desktop.svg";
} else {
	faqImgBg.src = "img/bg-pattern-mobile.svg";
	faqTitle.classList.add("text-center");
	faqImgWoman.src = "img/illustration-woman-online-mobile.svg";
	faqImgWoman.classList.add("mobile");
}

function faq1() {
	let element = document.getElementById("faq1");
	let elementLink = document.getElementById("faq1-link");

	element.classList.toggle("active");
	elementLink.classList.toggle("active");
}
