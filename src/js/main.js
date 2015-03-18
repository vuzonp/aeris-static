/**
 * Aeris static
 * _____________________________________________________________________________
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Thomas Girard
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author Thomas Girard
 * @copyright (c) 2015, Thomas Girard
 * @license http://opensource.org/licenses/MIT
 */

"use strict";
var Æ = (function() {

    // Helpers
    //--------------------------------------------------------------------------

    var isRetina = (window.devicePixelRatio > 1);

    // Handlers
    //--------------------------------------------------------------------------

    var æ = {

        /**
         * Menu component
         */
        menu: {

            // Selectors:
            elem: document.getElementById('menu'),
            wrapper: document.getElementById('main-wrapper'),
            widget: document.getElementById('menu-btn'),

            // Actions
            init: function() {
                if ( "classList" in this.wrapper ) {

                    // Close the menu at each loading
                    this.wrapper.style.overflow = 'hidden';
                    this.close();
                }
            },

            isHidden: function() {
                return this.wrapper.classList.contains('closed');
            },

            close: function() {
                this.widget.classList.remove('open');
                this.wrapper.classList.add('closed');
            },

            open: function() {
                this.widget.classList.add('open');
                this.wrapper.classList.remove('closed');
            },

            toggle: function() {
                this.widget.classList.toggle('open');
                this.wrapper.classList.toggle('closed');
            }
        },

        /**
         * Button: ascend
         */
        lift: {

            wrapper: document.getElementById('main-wrapper'),
            sheet: document.getElementById('sheet'),
            content: document.getElementById('content-wrapper'),
            widget: document.getElementById('back-top'),

            detect: function() {
                var screenHeight = this.wrapper.offsetHeight;
                var contentHeight = this.content.offsetHeight;
                var position = this.sheet.scrollTop;

                if (position > screenHeight && position < (contentHeight - position * 0.5) ) {
                    // show the widget only where we are in middle of the pages
                    if ( ! this.widget.classList.contains('onflow') ) {
                        this.widget.classList.add('onflow');
                    }
                } else {
                    this.widget.classList.remove('onflow');
                }
            }

        },

        setup: function() {
            this.menu.init();
        }

    };


    // Events
    //--------------------------------------------------------------------------

    æ.menu.widget.onclick = function() {
        æ.menu.toggle();

        if (! æ.menu.isHidden()) {
            // Never show the widget while the menu is open
            æ.lift.widget.classList.remove('onflow');
        } else {
            æ.lift.detect();
        }

        return false;
    };

    æ.lift.sheet.onscroll = function() {
        æ.lift.detect();
    };


    //--------------------------------------------------------------------------
    return æ;

})();
