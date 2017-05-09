var waitForSlack = setInterval(function() {
	if (document.getElementsByClassName('message_body').length) {
		var messages = document.getElementsByClassName('message_content');
		for (var i = 0; i < messages.length; i++) {
			if(messages[i].getElementsByClassName('message_sender')[0].getAttribute("href") == '/team/dennisppaul') {
				messages[i].getElementsByClassName('message_body')[0].classList.add("strike");
			}
		}
	//clearInterval(waitForSlack);
	}
}, 1000);