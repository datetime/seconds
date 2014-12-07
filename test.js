/**
 * seconds <https://github.com/jonschlinkert/seconds>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var should = require('should');
var moment = require('moment');
var seconds = require('./');

describe('seconds()', function () {
  it('should get the seconds for a minute.', function () {
    seconds('minute').should.equal(moment.duration(1, 'minute').asSeconds());
  });

  it('should get the seconds for an hour.', function () {
    seconds('hour').should.equal(moment.duration(1, 'hour').asSeconds());
  });

  it('should get the seconds for a day.', function () {
    seconds('day').should.equal(moment.duration(1, 'day').asSeconds());
  });

  it('should get the seconds for a week.', function () {
    seconds('week').should.equal(moment.duration(1, 'week').asSeconds());
  });
});