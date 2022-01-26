$(document).ready(function () {
	const a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";
	a.href = '/api/v2/subscribers/export';
	a.download = 'users.csv';
	a.click();
	// $.ajax({
	// 	method: "GET",
	// 	url: "http://localhost:3000/api/v2/subscribers/export",
	// }).then(resp => {
	// 	console.log(resp)

	// 	// if (resp.success) {
	// 	// 	alert({ resp })

	// 		// if (resp.data.new) {
	// 		// 	modal.querySelector('h3').innerHTML = 'Thank you!'
	// 		// 	modal.querySelector('p').innerHTML = 'Your credit will be found in your notification email. <br/> Share with your friends and potential clients below!'
	// 		// } else {
	// 		// 	modal.querySelector('h3').innerHTML = 'You Already Subscribed!'
	// 		// 	modal.querySelector('p').innerHTML = 'Share with your friends and potential clients below!'
	// 		// }
	// 		// initShare(userId)
	// 	//}
	// }).catch(err => {
	// 	console.error(err)
	// });
})