'use strict';

const array = () => {
  const lockArr = [];
  const fn = index => lockArr[index];
  fn.push = el => (lockArr.push(el), undefined);
  fn.pop = el => lockArr.pop(el);
  return fn;
};

module.exports = { array };
