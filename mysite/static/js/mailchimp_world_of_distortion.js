var mailchimpConfig = {
    baseUrl: 'mc.us18.list-manage.com',
    uuid: 'f04818d20ae949da5a78f0bb2',
    lid: '1cb6f95ab6'
};


var chimpPopupLoader = document.createElement("script");
chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');

var chimpPopup = document.createElement("script");
chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));

jQuery(function ($) {
    document.body.appendChild(chimpPopupLoader);

    $(window).on('load', function () {
        document.body.appendChild(chimpPopup);
    });

});
