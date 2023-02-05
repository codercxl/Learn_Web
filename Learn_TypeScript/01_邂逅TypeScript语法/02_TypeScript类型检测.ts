// function getLength(args: string | any[]) {
function getLength(args: { length: number }) {
  return args.length
}

getLength("aaaa")
getLength(["aaa", "bbb", "ccc", 123])
const info = {
  length: 100
}

getLength(info)

// getLength(123)


export {}