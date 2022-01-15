;(function () {
	const audioArray = document.querySelectorAll('.audio_ani');

	const delay = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
	window.addEventListener('scroll', function () {
		const nowHeight = document.documentElement.scrollTop;
		const height = document.documentElement.clientHeight;
		audioArray.forEach((item, index) => {
			const top = item.offsetTop;
			const control = top - height <= nowHeight - 100;
			if (control === true) {
				setTimeout(() => {
					item.classList.add('vt_content_ani');
				}, delay[index]);
			}
		});
	});
})();
