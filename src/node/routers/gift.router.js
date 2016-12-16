module.exports = function giftRouter(powerRouter, giftService) {
    'use strict';

    var route = powerRouter.createRouter('/gift');

    route.get('/', list)
         .post('/', create)
         .put('/', update);

    function create(req) {
        return giftService.create(req.body);
    }

    function update(req) {
        return giftService.update(req.body);
    }

    function list() {
        return giftService.list();
    }

    return route;
};