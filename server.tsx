import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3001;

const app = express();

const viteServer = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(viteServer.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let stamp = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    stamp = await viteServer.transformIndexHtml(url, stamp);

    const { render } = await viteServer.ssrLoadModule('src/server.tsx');
    const appHtml = await render(url);

    const html = stamp.replace(`<!--ssr-outlet-->`, appHtml);
    console.log(html);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
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
