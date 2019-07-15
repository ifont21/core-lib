const head = ([x, ...n]) => x;
const tail = ([x, ...n]) => n;

const filter = (arr, term) => {
  return arr.filter(item => item.includes(term));
};

module.exports = {
  head,
  tail,
  filter
};
