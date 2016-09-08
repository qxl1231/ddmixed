/* jshint node:true */
'use strict';

var bunyan = require('bunyan');
var env = process.env.NODE_ENV || 'development';

var logger =
{
  development: bunyan.createLogger({
     name: "general",
     streams: [
        {
           level: 'debug',
           stream: process.stdout
        },
        {
           level: 'error',
           path: '../error.log'
        },
        {
           level: 'debug',
           path: '../debug.log'
        }
     ]
  }),
  staging: bunyan.createLogger({
     name: "general",
     streams: [
        {
           level: 'debug',
           stream: process.stdout
        },
        {
           level: 'error',
           path: '../error.log'
        },
        {
           level: 'debug',
           path: '../debug.log'
        }
     ]
  }),
  production: bunyan.createLogger({
     name: "general",
     streams: [
        // {
        //    level: 'debug',
        //    stream: process.stdout
        // },
        {
           level: 'error',
           path: '../error.log'
        },
        {
           level: 'debug',
           path: '../debug.log'
        }
     ]
  }),
};

module.exports = logger[env];
