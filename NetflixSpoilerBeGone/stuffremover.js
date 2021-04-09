var target = document.querySelector('body');

var observer = new MutationObserver(function() {
	var spoiler = document.querySelector('.NFPlayer .evidence-overlay:not(.hacked) p');	
	if (spoiler){
		spoiler.innerText = 'This spoiler has been removed by the hacker gang. 😎';
		spoiler.closest('.evidence-overlay').classList.add('hacked');
	}
});

var config = { childList: true, subtree: true };

observer.observe(target, config);