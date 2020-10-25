import { Router } from 'https://deno.land/x/oak/mod.ts';
import itemsRoute from './itemsRoute.ts';

const router = new Router();

router.use('/items', itemsRoute.routes());

export default router;
