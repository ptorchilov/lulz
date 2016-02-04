$(function() {
	var lulzUrl = "http://adolgushin.com/otmazki/";
	var count = 1;
	var endLulzStr = "Придумай сам что-нибудь"
	
	function getLulz() {
		$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(lulzUrl + count) + '&callback=?', function(data) {
			if (addLulzOnPage(data.contents)) {
				count++;
				getLulz();
			}
		});
	}

	function addLulzOnPage(contents) {
		var html = $.parseHTML(contents);
		var lulz = $(html).find("div.center").text();
		
		if (lulz) {
			if (lulz.indexOf(endLulzStr) === -1) {
				$("div.lulz").append("<span>" + lulz + "</span><br/>");
			
				return true;
			}
			
			$("div.lulz").append("<br/><span>Всего отмазок: " + count + "</span>");
		}
		
		return false;
	}
	
	getLulz();
});