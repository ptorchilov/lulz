$(function() {
    var lulzUrl = "http://adolgushin.com/otmazki/";
    var count = 1;
    var endLulzStr = "Придумай сам что-нибудь"
    var delayTime = 1000;

    function getLulz() {
        $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(lulzUrl + count) + '&callback=?', function(data) {
            if (addLulzOnPage(data.contents)) {
                count++;
                setTimeout(getLulz, delayTime);
            }
        });
    }

    function addLulzOnPage(contents) {
        var html = $.parseHTML(contents);
        var lulz = $(html).find("div.center").text();

        if (lulz) {
            if (lulz.indexOf(endLulzStr) === -1) {
                $("div.lulz").append("<span class='text-primary'>" + lulz + "</span><br/>");

                return true;
            }

            $("div.lulz").append("<br/><span>Всего отмазок: " + count + "</span>");
        }

        return false;
    }

    getLulz();
});
