define([

    "jquery",
    "Magento_Ui/js/modal/modal",
    "mage/cookies",
    "domReady!"

], function($,modal) {
    "use strict";

    $.widget('popup.newsletter', {

        _init: function() {

            var options = {
                type: 'popup',
                innerScroll: true,
                title: $.mage.__('Iscriviti alla newsletter'),
                modalClass: "newsletter-modal",
                buttons: ''

            };

            var $widget = this;
            setTimeout(function(){
                $widget.openModal(options);
            }, 1000);
        },

        setCookie: function (cookie) {
            $.mage.cookies.set(cookie, 'yes', {lifetime: 342342342342});
        },

        openModal: function (options) {

            console.log(this.options);

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
