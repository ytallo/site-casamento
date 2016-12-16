module.exports = function giftModel(SaphyreData, models) {
    'use strict';

    var Gift = models.Gift,
        model = SaphyreData.createModel(Gift);

    this.list = list;

    model.projection('list', {
        '$id' : 'id',
        'name' : 'name',
        'have' : 'have',
        'description' : 'description'
    });

    model.sort('creation', {
        '$id' : 'ASC'
    });

    function list() {
        return model.list({
            projection : 'list',
            sort : 'creation'
        });
    }

    return this;
};