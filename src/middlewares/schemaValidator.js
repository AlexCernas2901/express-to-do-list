// Middleware para validacion de esquemas
export const schemaValidator = (schema) => async (req, res, next) => {
  try {
    schema.parse(req.body)
  } catch (error) {
    return res.status(400).json(
      error.errors.map((error) => error.message)
    )
  }
  next()
}
