module.exports = function guestModel(SaphyreData, models) {
    'use strict';

    var Guest = models.Guest,
        model = SaphyreData.createModel(Guest);

    this.list = list;

    model.projection('list', {
        '$id' : 'id',
        'name' : 'name',
        'phone' : 'phone',
        'confirmation' : 'confirmation',
        'dependents' : 'dependents',
        'observation' : 'observation'
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