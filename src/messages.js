// Mensajes de error y exito para los controladores
export const authMessages = {
  badCredentials: 'Invalid credentials',
  succesfullCreated: 'User created successfully',
  userNotFound: 'User not found',
  userAlreadyExists: 'User already exists'
}

export const middlewareMessages = {
  unauthorized: 'Unauthorized'
}

export const taskMessages = {
  serverError: 'Internal server error',
  taskNotFound: 'Task not found',
  taskDeleted: 'Task deleted successfully',
  taskUpdated: 'Task updated successfully'
}

export const authSchemaMessages = {
  usernameString: 'Username must must be only letters',
  usernameMin: 'Username me at least 6 characters',
  usernameMax: 'Username me at most 12 characters',
  emailString: 'Invalid email format',
  passwordMin: 'Password must be at least 8 characters',
  passwordMax: 'Password must be at most 16 characters'
}

export const databaseMessages = {
  connectionError: 'Error connecting to database',
  connectionSuccess: 'Database connection established'
}
