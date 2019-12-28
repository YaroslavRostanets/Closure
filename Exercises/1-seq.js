'use strict';

const seq = f => g => {
  return typeof g === 'number' ? f(g) : seq(x => f(g(x)))
};

module.exports = { seq };
