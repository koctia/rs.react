import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import serveStatic from 'serve-static';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const enviroment = process.env.NODE_ENV || 'development';

async function createViteServer() {
  const isProd = enviroment === 'production';
  const app = express();

  const viteServer = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(viteServer.middlewares);

  if (isProd) {
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')));
    app.use(compression());
    app.use(
      serveStatic(path.resolve(__dirname, 'dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const incFile = isProd
        ? path.resolve(__dirname, 'dist/client/index.html')
        : path.resolve(__dirname, 'index.html');
      let stamp = fs.readFileSync(incFile, 'utf-8');
      stamp = await viteServer.transformIndexHtml(url, stamp);
      const prodBuildPath = path.join(__dirname, './dist/server/server.js');
      const devBuildPath = path.resolve(__dirname, 'src/server.tsx');
      const { render } = await viteServer.ssrLoadModule(isProd ? prodBuildPath : devBuildPath);
      await render(url, res, stamp);
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
