/**
 * Setting X-Powered-By custom header to Twee.io vx.x.x
 */
module.exports.extension = function() {
    "use strict";

    twee.getApplication().use(function(req, res, next) {
        res.setHeader('X-Powered-By', 'Twee.io v' + String(twee.getConfig('twee:package:version')));
        next();
    });
};
