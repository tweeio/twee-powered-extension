/**
 * Setting X-Powered-By custom header to Twee.io vx.x.x
 */
module.exports.extension = function() {
    "use strict";

    twee.getApplication().use(function(req, res, next) {
        res.setHeader('X-Powered-By', twee.getConfig('extension:twee-powered:powered'));
        next();
    });
};

module.exports.configNamespace = 'twee-powered';
module.exports.config = {
    "powered": 'Twee.io v' + String(twee.getConfig('twee:package:tweeVersion'))
};
