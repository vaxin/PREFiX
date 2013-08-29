$(function() {
	var ce = chrome.extension;
	var bg_win = ce.getBackgroundPage();
	var PREFiX = bg_win.PREFiX;
	var account = PREFiX.account;

	$('#avatar img').prop('src', account.profile_image_url_large).prop('title', account.name);
	$('#switch button').click(function(e) {
		PREFiX.reset();
		close();
	});
	$('#version').text(PREFiX.version);

	var current = PREFiX.settings.current;

	$('[key]').each(function() {
		var $item = $(this);
		var key = $item.attr('key');
		$item.prop('checked', current[key]);
	});

	onunload = function(e) {
		$('[key]').each(function() {
			var $item = $(this);
			var key = $item.attr('key');
			current[key] = $item.prop('checked');
		});
		PREFiX.settings.save();
	}
});