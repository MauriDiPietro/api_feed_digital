import { Router } from 'express';
const router = Router();

import courseRouter from './course.router';

router.use('/courses', courseRouter);

export default router;