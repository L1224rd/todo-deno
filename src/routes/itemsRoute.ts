import { Router } from 'https://deno.land/x/oak/mod.ts';
import itemsController from '../controllers/itemsController.ts';

const router = new Router();

router.get('/', itemsController.list);

export default router;
