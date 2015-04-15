/**
 * Created by Xiaoqiang on 2015/4/16.
 */

var App;
window.App = App = (function ($, _, Backbone) {

    function init() {
        $('body').html('<p>Program ready.</p>');
    }

    return {
        init: init
    };
}(jQuery, _, Backbone));
