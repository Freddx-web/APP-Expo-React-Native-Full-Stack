export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return 'El campo "Email" esta vacio.'
  if (!re.test(email)) return 'Este "Email" es invalido, porfavor ingrese un "Email" valido para continuar'
  return ''
}
