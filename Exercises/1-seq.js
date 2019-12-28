'use strict';

const seq = f => {
  const fns = [f];
  const res = fnOrNum => {
    if (typeof fnOrNum === 'number') {
      return fns.reduceRight((acc, f) => acc = f(acc), fnOrNum)
    } else {
      fns.push(fnOrNum);
      return res;
    }
  };
  return res;
};

module.exports = { seq };
