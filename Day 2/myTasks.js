$(document).ready(function()
{
	$('#message').focus();

	// YOUR CODE GOES HERE

	$("#post-btn").click(function(){
		var comment = " " + document.getElementById('message').value
		if (comment.length > 0) {
			var structure = "<img src='http://i.imgur.com/87kIXSN.jpg'>" + comment + "<br>" + "<br>"
			$("#wall").prepend(structure);
		}
		document.getElementById('message').value = '';
	})

	$("#message").click(function(){
		$(document).keypress(function(event) {
			if (event.which === 13) {
				var msg = " " + document.getElementById('message').value
				if (msg.length > 0) {
					var skeleton = "<img src='http://i.imgur.com/87kIXSN.jpg'>" + msg + "<br>" + "<br>"
					$("#wall").prepend(skeleton);
				}
				document.getElementById('message').value = '';
			}
		})
	});

});
