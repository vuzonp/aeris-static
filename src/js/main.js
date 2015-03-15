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
                if ("classList" in this.wrapper) {

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
         * Posts previewer
         */
        post: {

            init: function() {
                var wrapper = document.getElementById('last-updates').getElementsByClassName('gallery');

                for(var i = 0; i < wrapper.length; i++) {

                    var w = wrapper.item(i);

                    var elem, img, post, summary, src;
                    var list = w.getElementsByClassName('post-picture');

                    while(list.length > 0) {
                        // Select the nodes
                        var elem = list.item(0);
                        img = (elem.nodeName == "IMG") ? elem : elem.getElementsByTagName('img')[0];
                        summary =  elem.parentNode;
                        post = summary.parentNode;

                        if (img.nodeName == 'IMG') {
                            src = img.getAttribute('src');
                            post.classList.add('pictorial');
                            summary.style.backgroundImage = 'url('+ src +')';
                        }
                        summary.removeChild(elem);
                        post.onclick = function() {
                            var url = this.getElementsByTagName('a')[0].getAttribute('href');
                            window.location = url;
                        };
                    }
                }
            }

        },

        setup: function() {
            this.menu.init();
            this.post.init();
        }

    };


    // Events
    //--------------------------------------------------------------------------

    æ.menu.widget.onclick = function() {
        æ.menu.toggle();
        return false;
    };


    //--------------------------------------------------------------------------
    return æ;

})();
