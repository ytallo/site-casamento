module.exports = function (sequelize, DataTypes) {
    'use strict';

    var Gift = sequelize.define('Gift', {
        gift_id : {
            type : DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement : true
        },

        name : DataTypes.STRING,
        description : DataTypes.STRING,
        have : DataTypes.INTEGER,
        reserved : DataTypes.INTEGER
    }, {
        timestamps : true,
        tableName : 'gift'
    });

    const HaveType = {
        YES : 0,
        NO : 1
    };

    Gift.HaveType = HaveType;

    return Gift;
};
