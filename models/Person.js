(function(){
    var keystone = require('keystone');
    var Types = keystone.Field.Types;

    /**
     * User Model
     * ==========
     */

    var Person  = new keystone.List('Person');

    Person.add({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true, index: true},
        middleName :{type: String, index: true},
        street: {type: String},
        locality: {type: String},
        town: {type: String},
        parish: {type: String, required: true},
        contact: [{type: String}],
        created: {type: Date, required: true},
        listed: {type: Date, required: true},
        occupation: {type: String, required: true},
        relevance: {type: Number}
    });
    /**
     * Registration
     */
    Person.defaultColumns = 'firstName, middleName, lastName, occupation';
    Person.register();

});