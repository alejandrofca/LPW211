function f (n = 95) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()
