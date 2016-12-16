module.exports = function (sequelize, DataTypes) {
    'use strict';

    var Guest = sequelize.define('Guest', {
        guest_id : {
            type : DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement : true
        },

        name : DataTypes.STRING,
        phone : DataTypes.STRING,
        confirmation : DataTypes.INTEGER,
        dependents : DataTypes.INTEGER,
        observation : DataTypes.STRING
    }, {
        timestamps : true,
        tableName : 'guest'
    });

    const ConfirmationType = {
        YES : 0,
        NO : 1,
        NOT_SURE : 2
    };

    Guest.ConfirmationType = ConfirmationType;

    return Guest;
};
