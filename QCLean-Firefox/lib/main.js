var qclean = {} || qclean;

var pageMod = require("sdk/page-mod");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var { ActionButton } = require("sdk/ui/button/action");

/* Add content script for facebook's page. */
pageMod.PageMod({
    include: "*.facebook.com",
    contentScript:
        'var qclean = qclean || {};' +
        'qclean.script = document.createElement("script");' +
        'qclean.script.src = "'+data.url("qclean.js")+'";'+
        '(document.head||document.documentElement).appendChild(qclean.script);',
    contentStyleFile: data.url("remove.css"),
    contentScriptWhen: "ready"
});

/* Add button on ui */
qclean.uiButton = ActionButton({
    id: "qclean-button",
    label: "QCLean",
    icon: {
        "16":"./qclean16.png",
        "32":"./qclean32.png"
    },
    onClick: function(state){
        //TODO
        //qclean.uiBtnClick(state);
    },
    disabled: true
});

//TODO
qclean.uiBtnClick = function(state){
    console.log(state);
};

/* Enable button only in *.facebook.com */
qclean.fbUrlRegExp = new RegExp("^(http://|https://).*\.facebook\.com/");

qclean.uiBtnEnable = function(tab,enable){
    qclean.uiButton.state(tab,{disabled: !enable});
};

tabs.on("ready",function(tab){
    console.log("Something ready");
    console.log(tab.url)
    qclean.uiBtnEnable(tab,qclean.fbUrlRegExp.test(tab.url));
});

