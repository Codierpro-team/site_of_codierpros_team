const memberBtn = document.querySelector('.about__member');
const websiteBtn = document.querySelector('.about__website');

const footerLeft = document.querySelector('.footer-left');
const footerRight = document.querySelector('.footer-right');

const memberListAbout = document.querySelector('.left-list-about');
const websiteListAbout = document.querySelector('.right-list-about');
const footerText = document.querySelectorAll('.footer-left__text');
const footerLogo = document.querySelectorAll('.footer__logo');

const aboutRight = document.querySelector('.about__right');
const aboutLeft = document.querySelector('.about__left');

const memberListClose = document.querySelector('.left-list-about__close');
const websiteListClose = document.querySelector('.right-list-about__close');

const leftNextBtn = document.querySelector('.left-list-about__next');
const rightNextBtn = document.querySelector('.right-list-about__next');

const footerLeftBtn = document.querySelector('.footer-left__button-prev');
const footerRightBtn = document.querySelector('.footer-right__button-prev');


const memberListActive = function() {
	aboutLeft.classList.add('left-about--active');
	aboutRight.classList.add('right-about--active');
	memberListAbout.classList.add('list-about--active');
}

const websiteListActive = function() {
	aboutLeft.classList.add('left-about--active');
	aboutRight.classList.add('right-about--active');
	websiteListAbout.classList.add('right-list-about--active');
}

const listHide = function(elem, classElem) {
	setTimeout(() => aboutRight.classList.remove('right-about--active'), 300);
	setTimeout(() => aboutLeft.classList.remove('left-about--active'), 300);
	elem.classList.remove(classElem);
}

const footerBtn = function() {
	let classElem1 = "list-about--active";
	let classElem2 = "right-list-about--active";

	listHide(memberListAbout, classElem1);
	listHide(websiteListAbout, classElem2);
}


websiteBtn.addEventListener("click", websiteListActive);
memberBtn.addEventListener("click", memberListActive);


// add anim for elements
const addAnim = function() {
	for (let i = 0; i < footerText.length; i++) {
		footerText[i].classList.add('footer-left__text--active');
	}

	for (let i = 0; i < footerLogo.length; i++) {
		footerLogo[i].classList.add('footer__logo--active');
	}
}


memberListClose.addEventListener("click", () => {
	let classElem = "list-about--active";
	listHide(memberListAbout, classElem);
});

websiteListClose.addEventListener("click", () => {
	let classElem = "right-list-about--active";
	listHide(websiteListAbout, classElem);
});


leftNextBtn.addEventListener('click', () => {
	if (footerRight.classList.contains('footer--active')) {
		footerRight.classList.remove('footer--active');
	}

	addAnim();
	footerLeft.classList.add('footer--active');
});

rightNextBtn.addEventListener('click', () => {
	if (footerLeft.classList.contains('footer--active')) {
		footerLeft.classList.remove('footer--active');
	}

	addAnim();
	footerRight.classList.add('footer--active');
});


footerLeftBtn.addEventListener('click', () => {
	footerBtn();
});

footerRightBtn.addEventListener('click', () => {
	footerBtn();
});