/**
 * seconds <https://github.com/jonschlinkert/seconds>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

require('mocha');
var assert = require('assert');
var moment = require('moment');
var seconds = require('./');

describe('seconds()', function() {
  it('should get the seconds for a minute.', function() {
    assert.equal(seconds('minute'), moment.duration(1, 'minute').asSeconds());
  });

  it('should get the seconds for an hour.', function() {
    assert.equal(seconds('hour'), moment.duration(1, 'hour').asSeconds());
  });

  it('should get the seconds for a day.', function() {
    assert.equal(seconds('day'), moment.duration(1, 'day').asSeconds());
  });

  it('should get the seconds for a week.', function() {
    assert.equal(seconds('week'), moment.duration(1, 'week').asSeconds());
  });

  it('should get the seconds for the current day, since midnight.', function() {
    var todaySeconds = seconds('today');
    var now = new Date;
    var since = ((now.getTime() - now.setHours(0,0,0,0)) / 1000) | 0;

    assert.equal(since, todaySeconds);
  });
});
