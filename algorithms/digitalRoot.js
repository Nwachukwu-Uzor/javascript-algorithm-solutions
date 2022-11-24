function digitalRoot(n) {
  // ...
  //   if (n.toString().length === 1) {
  //     return n;
  //   }
  //   const split = n
  //     .toString()
  //     .split("")
  //     .reduce((a, b) => {
  //       return a + Number(b);
  //     }, 0);
  //   return digitalRoot(split);
  return n.toString().length === 1
    ? n
    : digitalRoot(
        n
          .toString()
          .split("")
          .reduce((a, b) => a + Number(b), 0)
      );
}

module.exports = digitalRoot;
