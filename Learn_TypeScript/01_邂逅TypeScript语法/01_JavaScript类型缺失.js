function getLength(args) {
  return args.length
}

console.log(getLength("aaaa"));
console.log(getLength(["aaa", "bbb", "ccc"]));

console.log(getLength(123)); // undefined
// console.log(getLength())