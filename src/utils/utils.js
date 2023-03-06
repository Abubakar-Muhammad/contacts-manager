export const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x)

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x)
