import { Application } from "https://deno.land/x/oak/mod.ts";

import { APP_HOST, APP_PORT } from './config.ts';
import router from './routes/index.ts';

import requestHandler from './handlers/requestHandler.ts';
import responseHandler from './handlers/responseHandler.ts';

const app = new Application();

app.use(requestHandler);
app.use(router.routes());
app.use(responseHandler);

console.log(`Listening on port ${APP_PORT}`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
