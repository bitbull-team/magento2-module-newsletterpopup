define([

    "jquery",
    "Magento_Ui/js/modal/modal",
    "mage/cookies",
    "domReady!"

], function($,modal) {
    "use strict";

    $.widget('popup.newsletter', {

        /**
         * @private
         */

        _init: function() {

            var $widget = this,
                delay   = this.options.delay,
                time    = this._getDelay(delay),
                cookie = 'newsletter',
                options = {
                  type: 'popup',
                  innerScroll: true,
                  title: $.mage.__(this.options.title),
                  modalClass: "newsletter-modal",
                  buttons: ''
                };

            if (this._isCookieSet (cookie) != true )  {

                this._logTime(time, function(){
                    $widget._openModal(options, cookie);
                });
            }

        },

        /**
         * Open Modal and set cookie
         *
         * @param options
         * @param cookie
         * @private
         */

        _openModal: function (options, cookie) {

            var html   = this.element,
                popup  = modal(options, html);

               html.modal('openModal');
               this._setCookie(cookie);
        },

        /**
         * Return the remaining time
         * for the modal opening
         *
         * @param delay
         * @returns {*}
         * @private
         */

        _getDelay: function (delay) {

            var cookie = $.mage.cookies.get('popup-timing');
            if (cookie > 0 ) {
                return delay - cookie
            } else {
                return delay
            }
        },

        /**
         * Set remaining time cookie
         *
         * @param i
         * @param callback
         * @private
         */

        _logTime: function (i, callback) {

            callback = callback || function(){};
            var int = setInterval(function() {
                $.mage.cookies.set('popup-timing', i);
                i-- || (clearInterval(int), callback());
            }, 1000);
        },

        /**
         * Set cookie
         *
         * @param cookie
         * @private
         */

        _setCookie: function (cookie) {
            $.mage.cookies.set(cookie, 'yes',
                {lifetime: 342342342342});
        },

        /**
         * Check if cookie is set
         *
         * @param cookie
         * @returns {boolean}
         * @private
         */

        _isCookieSet: function (cookie) {
            if ($.mage.cookies.get(cookie) == 'yes') {
                return true;
            }
        }

    });

    return $.popup.newsletter;
});
