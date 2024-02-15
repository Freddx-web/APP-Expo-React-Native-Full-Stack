export function passwordValidator(password) {
  if (!password) return 'El campo "Contraseña" de usuario esta vacio.'
  if (password.length < 7) return 'La "Contraseña" debe tener al menos 7 caracteres.'
  return ''
}
