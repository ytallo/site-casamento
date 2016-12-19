module.exports = function giftRouter(powerRouter, giftService) {
    'use strict';

    var route = powerRouter.createRouter('/gift');

    route.get('/', list)
         .post('/', create)
         .put('/', update)
         .post('/reserve', reserve);

    function create(req) {
        return giftService.create(req.body);
    }

    function update(req) {
        return giftService.update(req.body);
    }

    function reserve(req) {
        return giftService.reserve(req.body);
    }

    function list() {
        return giftService.list();
    }

    return route;
};