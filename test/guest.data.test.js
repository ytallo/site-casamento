var testHelper = require('./test.helper'),
    expect = testHelper.expect,
    acqua = testHelper.acqua,
    models = acqua.get('models'),
    Guest = models.Guest,
    guestModel = acqua.get('guestModel');

describe('guestModel', () => {
    'use strict';

    beforeEach(() => testHelper.sync());

    it('should list', () => {
        return Guest.create({ name : 'Ytallo', phone : '9999-9999' })
            .then(() => Guest.create({ name : 'Layon', phone : '00000-0000' }))
            .then(() => guestModel.list())
            .then(result => {
                expect(result).with.length(2);
                expect(result[0]).to.have.property('id').equal('1');
                expect(result[0]).to.have.property('name').equal('one guest');

                expect(result[1]).to.have.property('id').equal('2');
                expect(result[1]).to.have.property('name').equal('another guest');
            });
    });

});