/*!
 * seconds <https://github.com/jonschlinkert/seconds>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var SECONDS_DAY = 864e5; // 1 * 60 * 60 * 24

module.exports = function(timespan) {
  return (({
    year  : year(),
    month  : month(),
    today  : today(),
    week   : 6048e5, // 1 * 60 * 60 * 24 * 7,
    day    : SECONDS_DAY,
    hour   : 36e5,   // 1 * 60 * 60,
    minute : 6e4,    // 1 * 60,
    second : 1e3     // 1,
  })[timespan.toLowerCase()] / 1000) | 0;
};

function today() {
  var now = new Date;
  return now.getTime() - now.setHours(0, 0, 0, 0);
}

function month() {
  var todaySeconds = today();
  var secondsMonth = (new Date().getDate() - 1) * SECONDS_DAY;
  return todaySeconds + secondsMonth;
}

function year() {
  var now = new Date;
  return now.getTime() - now.setMonth(0, 0);
}
