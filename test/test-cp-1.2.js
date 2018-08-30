#!/usr/bin/env node
// -*- coding: utf-8 -*-
"use strict"

var Test = require('./framework.js').Test;

// initialize
Test.init( { system: 'cp', version: '1.2' } );

// fill the array with the commands to test
Test.commands = [
  'bootnotification',
  'authorize',
  'heartbeat',
  'starttransaction',
  'metervalues',
  'stoptransaction',
  'diagnosticsstatusnotification',
  'statusnotification',
  'firmwarestatusnotification'
];

// process tests
Test.test();

