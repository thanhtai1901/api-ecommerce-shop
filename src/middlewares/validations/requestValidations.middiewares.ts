import { NextFunction, Request, Response } from 'express';
import { ValidationResult } from 'joi';

type SchemavalidationesFunctione = (value: any) => ValidationResult;

const validationesRequest =
  (Schemavalidationes: SchemavalidationesFunctione) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { error } = Schemavalidationes(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
    } else {
      next();
    }
  };

export { validationesRequest };
