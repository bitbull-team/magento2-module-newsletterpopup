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

    $.widget('popup.newsletter', {

        _init: function() {
            var $widget = this;

            console.log(this);

            setTimeout(function(){
                $widget.openModal();
            }, 1000);
        },

        setCookie: function (cookie) {
            $.mage.cookies.set(cookie, 'yes', {lifetime: 342342342342});
        },

        openModal: function () {

            var html   = this.element,
                popup  = modal(options, html),
                cookie = 'newsletter';

            //if (this._isCookieSet (cookie) != true ) {
               html.modal('openModal');
               this.setCookie(cookie);
            //}

        },

        _isCookieSet: function (cookie) {
            if ($.mage.cookies.get(cookie) == 'yes') {
                return true;
            }
        }

    });

    return $.popup.newsletter;
});
