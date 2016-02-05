$(function() {
    var lulzUrl = "http://adolgushin.com/otmazki/";
    var count = 310;

    var niceLulz = 0;

    var endLulzStr = "Придумай сам что-нибудь"
    var endLulzCount = 0;

    var delayTime = 1000;

    function getLulz() {
        $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(lulzUrl + count++) + '&callback=?', function(data) {
            if (addLulzOnPage(data.contents)) {
                setTimeout(getLulz, delayTime);
            } else {
                if (++endLulzCount > 2) {
                    showStatistics(niceLulz);
                } else {
                    setTimeout(getLulz, delayTime);
                }
            }
        });
    }

    function addLulzOnPage(contents) {
        var html = $.parseHTML(contents);
        var lulz = $(html).find("div.center").text();

        if (lulz) {
            if (lulz.indexOf(endLulzStr) === -1) {
                $("div.lulz").append("<span class='text-primary'>" + lulz + "</span><br/>");
                niceLulz++;

                return true;
            }
        }

        return false;
    }

    function showStatistics(count) {
        $("div.lulz").append("<br/><span>Всего отмазок: " + count + "</span>");
    }

    getLulz();
});
