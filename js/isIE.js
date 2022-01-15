(function () {
	var ie = /*@cc_on!@*/ false || !!document.documentMode;
	if (ie) {
		document.documentElement.innerHTML =
			'<div style="text-align:center;margin-top:50px;"><h1>本網站不支援IE瀏覽器，請切換<a href="https://www.google.com/intl/zh-TW/chrome/" style="color:rgb(0,0,255)">Chrome</a>或其他瀏覽器進行瀏覽。</h1></div>';
		setInterval(function () {
			document.documentElement.innerHTML =
				'<div style="text-align:center;margin-top:50px;"><h1>本網站不支援IE瀏覽器，請切換<a href="https://www.google.com/intl/zh-TW/chrome/" style="color:rgb(0,0,255)">Chrome</a>或其他瀏覽器進行瀏覽。</h1></div>';
		}, 2000);
	}
})();
