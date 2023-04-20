import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3001;

async function createViteServer() {
  let didError = false;
  const app = express();

  const viteServer = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(viteServer.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let stamp = fs.readFileSync(path.resolve(dirname, 'index.html'), 'utf-8');
      stamp = await viteServer.transformIndexHtml(url, stamp);
      const tagBody = stamp.split('<!--ssr-body-->');

      const { render } = await viteServer.ssrLoadModule('/src/server.tsx');
      const { pipe } = await render(url, {
        onShellReady() {
          res.statusCode = 200;
          res.setHeader('content-type', 'text/html');
          res.write(tagBody[0]);
          pipe(res);
        },
        onAllReady() {
          res.statusCode = didError ? 500 : 200;
          res.write(tagBody[1]);
          res.end();
        },
        onShellError(error: Error) {
          res.statusCode = 500;
          res.setHeader('content-type', 'text/html');
          res.send('<h2>Something went wrong</h2>');
          console.error(error);
        },
        onError(error: Error) {
          didError = true;
          console.error(error);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        viteServer.ssrFixStacktrace(error);
        next(error);
      }
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

createViteServer();
