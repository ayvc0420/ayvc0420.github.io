(function () {
	/* 首頁 */

	const c4H1 = document.querySelector('.content4 h1');

	let articleDiv = Array.from(
		document.querySelectorAll('.content article>div')
	);
	articleDiv.splice(0, 2);

	window.addEventListener('scroll', animationHandler);
	function animationHandler() {
		const c4H1Top = c4H1.offsetTop;
		const nowHeight = document.documentElement.scrollTop;
		const nowWidth = document.documentElement.scrollWidth;
		const height = document.documentElement.clientHeight;
		if (nowWidth >= 1024) {
			articleDiv.forEach((item) => {
				const baba = item.parentNode;
				if (
					baba.offsetTop - height <=
					nowHeight -
						parseInt(window.getComputedStyle(item, null).height, 10) / 2
				) {
					const child = baba.querySelectorAll('div');
					child.forEach((childDiv) => {
						childDiv.classList.add('content_ani');
					});
				}
			});
		} else {
			articleDiv.forEach((item) => {
				const top = item.offsetTop;
				const control = top - height <= nowHeight;
				control ? item.classList.add('content_ani') : '';
			});
		}

		if (nowWidth >= 1024) {
			mob_top.style.display = 'none';
		} else {
			mob_top.style.display = 'block';
		}
		if (height <= nowHeight) {
			mob_top.style.transform = `translateX(0%)`;
		} else {
			mob_top.style.transform = `translateX(1000%)`;
		}

		const controlC4H1 = c4H1Top - height <= nowHeight - 100;
		controlC4H1 ? c4H1.classList.add('content_ani_h1') : '';
	}
    setTimeout(()=>{
        animationHandler()
    },200)
})();
