/*!
 * seconds <https://github.com/jonschlinkert/seconds>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(timespan) {
  return ({
    // year  : year(),  // todo
    // month : month(), // todo
    // today : today(), // todo

    week   : 6048e5, // 1 * 60 * 60 * 24 * 7,
    day    : 864e5,  // 1 * 60 * 60 * 24,
    hour   : 36e5,   // 1 * 60 * 60,
    minute : 6e4,    // 1 * 60,
    second : 1e3     // 1,
  })[timespan.toLowerCase()] / 1000;
};
