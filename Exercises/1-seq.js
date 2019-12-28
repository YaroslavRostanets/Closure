'use strict';

const seq = f => {
  const fs = [f];
  return res = arg => typeof arg === 'number' ?
    fs.reduceRight((ac, f) => ac = f(ac), arg) :
    fs.push(arg), res;
};

module.exports = { seq };
