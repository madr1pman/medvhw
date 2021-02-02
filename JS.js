window.addEventListener('load', function () 
{
	let page = document.getElementById("page");
	let style = document.getElementById("style");
	page.addEventListener('click', function () {
		window.location.href = "https://youtu.be/5QZcOugHQ6s";
	});
	style.addEventListener('click', function () {
		document.body.style.backgroundColor = "pink";
	});
});
