var regexp = new RegExp("^(http://|https://).*\.facebook\.com/");

function checkForValidUrl(tabId, changeInfo, tab) {
    if(regexp.test(tab.url)){ 
        chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

function parser(data){
    console.log(data.length);
}

$(function(){
    console.log("Hello World!");

    $.ajax({
        type:"get",
        dataType:"jsonp",
        url:"http://spamgroup.tonyq.org/groups/jsonp/?jsonp=parser",
        error:function(){
            console.log("error");
        }
    });
    
});

/*
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3607701-4']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
*/
