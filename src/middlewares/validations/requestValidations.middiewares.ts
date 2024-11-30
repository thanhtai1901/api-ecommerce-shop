import { NextFunction, Request, Response } from 'express';

import { ValidationResult } from 'joi';

type SchemavalidationesFunctione = (value: any) => ValidationResult;
const validationesRequest =
  (Schemavalidationes: SchemavalidationesFunctione) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = Schemavalidationes(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
export { validationesRequest };
