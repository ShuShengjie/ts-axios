const toString = Object.prototype.toString
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  // 由于null的typeof也是object故先做一次判断
  return val !== null && typeof val === 'object'
}
