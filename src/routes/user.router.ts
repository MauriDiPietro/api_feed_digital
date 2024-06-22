import { Router } from "express";
import * as controller from '../controllers/user.controllers';
// import { validateGetNews, validatePostNews } from "../middlewares/validators/news.validator";

const router = Router();

router.get('/', controller.getAll);
router.post('/', controller.register);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;