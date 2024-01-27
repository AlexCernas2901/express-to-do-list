// Mensajes de error y éxito para los controladores
export const authMessages = {
  badCredentials: 'Credenciales inválidas',
  succesfullCreated: 'Usuario creado exitosamente',
  userNotFound: 'Usuario no encontrado',
  userAlreadyExists: 'El usuario ya existe'
}

export const middlewareMessages = {
  unauthorized: 'No autorizado'
}

export const taskMessages = {
  serverError: 'Error interno del servidor',
  taskNotFound: 'Tarea no encontrada',
  taskDeleted: 'Tarea eliminada exitosamente',
  taskUpdated: 'Tarea actualizada exitosamente'
}

export const authSchemaMessages = {
  usernameString: 'El nombre de usuario debe contener solo letras',
  usernameMin: 'El nombre de usuario debe tener al menos 6 caracteres',
  usernameMax: 'El nombre de usuario debe tener como máximo 12 caracteres',
  emailString: 'Formato de correo electrónico inválido',
  passwordMin: 'La contraseña debe tener al menos 8 caracteres',
  passwordMax: 'La contraseña debe tener como máximo 16 caracteres'
}

export const databaseMessages = {
  connectionError: 'Error al conectar con la base de datos',
  connectionSuccess: 'Conexión a la base de datos establecida exitosamente'
}
