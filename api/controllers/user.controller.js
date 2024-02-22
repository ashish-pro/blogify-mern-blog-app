import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.models.js';

export const test = (req, res) => {
  res.json({ message: 'API is working!' });
};
