define([

    "jquery",
    "Magento_Ui/js/modal/modal",
    "mage/cookies",
    "domReady!"

], function($,modal) {
    "use strict";

    var options = {
        type: 'popup',
        innerScroll: true,
        title: $.mage.__('Iscriviti alla newsletter'),
        modalClass: "newsletter-modal",
        buttons: [{
            text: $.mage.__('Chiudi'),
            class: '',
            click: function () {
                this.closeModal();
            }
        }]
    };

    function setCookie(cookie) {
        $.mage.cookies.set(cookie, 'yes', {lifetime: 342342342342});
    }


    function isCookieSet (cookie) {
        if ($.mage.cookies.get(cookie) == 'yes') {
            return true;
        }
    }

    function openModal() {

        var html   = $('.popup-newsletter'),
            popup  = modal(options, html),
            cookie = 'newsletter';

        if (isCookieSet (cookie) != true ) {
            html.modal('openModal');
            setCookie(cookie);
        }
    }

    return function () {
        setTimeout(openModal, 60000);
    };

});