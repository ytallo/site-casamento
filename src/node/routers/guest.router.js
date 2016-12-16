module.exports = function guestRouter(powerRouter, guestService) {
    'use strict';

    var route = powerRouter.createRouter('/guest');

    route.post('/', create);

    function create(req) {
        return guestService.create(req.body);
    }

    return route;
};