'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Companies", deps: []
 * createTable "Employees", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "create-company",
    "created": "2020-05-04T15:39:00.558Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Companies",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Employees",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
