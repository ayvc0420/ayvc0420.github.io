(function () {
	const now_year = document.getElementById('now_year');
	const time = document.querySelector('.time');
	const short = document.getElementById('short');
	const middle = document.getElementById('middle');
	const long = document.getElementById('long');
	const mobTopBtn = document.getElementById('mob_top');
	const clock = document.getElementById('content3_time');
	function year() {
		// let now = new Date();
		// let new_year = new Date(2021,12,31);
		// let end = new_year-now;
		// // let end = new_year.getTime()-now.getTime()+now.getTimezoneOffset()*60*1000;
		// let time = new Date(end);
		// now_year.innerHTML = `${time.getMonth()-1}個月${time.getDate()}天${time.getHours()}小時${time.getMinutes()}分${time.getSeconds()}秒`

		// 測試時間BUG
		// let nowTime = new Date(Date.now() - 169750000)
		let nowTime = new Date();
		let newYear = new Date(nowTime.getFullYear() + 1 + '/01/01');
		let difference = newYear - nowTime;
		let d = Math.floor(difference / 1000 / 60 / 60 / 24);
		let h = Math.floor((difference / 1000 / 60 / 60) % 24);
		let m = Math.floor((difference / 1000 / 60) % 60);
		let s = Math.floor((difference / 1000) % 60);
		now_year.textContent = `${d}天${h}小時${m}分${s}秒`;

		let nowHr = nowTime.getHours();
		let nowMin = nowTime.getMinutes();
		let nowS = 60 - s;
		if (nowMin <= 9) {
			nowMin = '0' + nowMin;
		}
		if (nowS <= 9) {
			nowS = '0' + nowS;
		}
		let timeHr = nowTime.getHours();
		const timeMin = nowTime.getMinutes();
		const timeS = nowS;
		if (timeHr > 12) {
			timeHr -= 12;
		}
		const longDeg = timeHr * 30 + (timeMin * 30) / 60;
		const middleDeg = timeMin * 6 + (timeS * 6) / 60;
		const shortDeg = timeS * 6;

		if (nowS === 60) {
			nowS = '00';
			nowMin += 1;
		}
		if (nowMin === 60) {
			nowMin = '00';
			nowHr += 1;
		}

		time.textContent = `現在時間:${(nowHr).toString().padStart(2,'0')}:${nowMin}:${nowS}`;
		long.style.transform = `rotate(${longDeg - 90}deg)`;
		middle.style.transform = `rotate(${middleDeg - 90}deg)`;
		short.style.transform = `rotate(${shortDeg - 90}deg)`;

		if (timeHr >= 0 && timeHr <= 3) {
			long.style.top = '2px';
			long.style.left = '-2px';
		} else if (timeHr >= 4 && timeHr <= 8) {
			long.style.top = '3px';
			long.style.left = '3px';
		} else if (timeHr >= 9 && timeHr <= 11) {
			long.style.top = '5px';
			long.style.left = '0px';
		} else if (timeHr <= 12 && timeHr >= 14) {
			long.style.top = '2px';
			long.style.left = '1px';
		}
		timeS === '01'
			? (short.style.transition = 'none')
			: (short.style.transition = 'all .2s');
		return year;
	}
	setInterval(year(), 1000);

	const ytScrollArray = document.querySelectorAll('.ytscroll_ani');

	
	window.addEventListener('scroll', tableHandler);
	function tableHandler() {
		const nowHeight = document.documentElement.scrollTop;
		const now_width = document.documentElement.scrollWidth;
		const height = document.documentElement.clientHeight;

		ytScrollArray.forEach((item) => {
			const control = item.offsetTop - height <= nowHeight - 100;
			control ? item.classList.add('yt_title_ani') : '';
		});

		now_width >= 1024
			? (mobTopBtn.style.display = 'none')
			: (mobTopBtn.style.display = 'block');
		height <= nowHeight
			? (mobTopBtn.style.transform = `translateX(0%)`)
			: (mobTopBtn.style.transform = `translateX(1000%)`);

		const clockControl = clock.offsetTop - height <= nowHeight - 100;
		clockControl ? clock.classList.add('yt_title_ani') : '';
	}

	setTimeout(()=>{
		tableHandler();
	},200)
})();
