import express from 'express';
import user from './user.js';

const router = express.Router();
router.use(express.json());
router.use('/users', user);
export default router;