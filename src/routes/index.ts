import { Router } from 'express';
const router = Router();

import courseRouter from './course.router';
import userRouter from './user.router';

router.use('/courses', courseRouter);
router.use('/users', userRouter);

export default router;