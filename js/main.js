

$(document).ready(function () {
	$("#btn").click(function () {
		if (navigator.share) {
			navigator.share({
				title: 'web.dev',
				text: 'Check out web.dev.',
				url: 'https://www.google.com/',
			}).then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
		}
	});
});	