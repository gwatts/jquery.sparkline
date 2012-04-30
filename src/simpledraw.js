    // Provide a cross-browser interface to a few simple drawing primitives
    $.fn.simpledraw = function (width, height, useExisting, interact) {
        var target, mhandler;
        if (useExisting && (target = this.data('_jqs_vcanvas'))) {
            return target;
        }
        if (width === undefined) {
            width = $(this).innerWidth();
        }
        if (height === undefined) {
            height = $(this).innerHeight();
        }
        if ($.browser.hasCanvas) {
            target = new VCanvas_canvas(width, height, this, interact);
        } else if ($.browser.msie) {
            target = new VCanvas_vml(width, height, this);
        } else {
            return false;
        }
        mhandler = $(this).data('_jqs_mhandler');
        if (mhandler) {
            mhandler.registerCanvas(target);
        }
        return target;
    };

    $.fn.cleardraw = function () {
        var target = this.data('_jqs_vcanvas');
        if (target) {
            target.reset();
        }
    };

