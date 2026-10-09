export function quote(value) {
  return `'${value.replace('\'', '\\\'')}'`
}
