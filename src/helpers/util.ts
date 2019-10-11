const toString = Object.prototype.toString
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  // 由于null的typeof也是object故先做一次判断
  return val !== null && typeof val === 'object'
}
// 判断是否是一个普通对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, form: U): T & U {
  for (const key in form) {
    ;(to as T & U)[key] = form[key] as any
  }
  return to as T & U
}
