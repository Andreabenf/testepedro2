import { body, query } from 'express-validator';

export const listCsasRules = [
  query('page').optional().isInt().toInt(),
  query('perPage').optional().isInt().toInt(),
];

export const createCsaRules = [
  body('csa').isLength({ max: 140 }).exists(),
];
