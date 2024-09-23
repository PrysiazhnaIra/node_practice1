import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';
import { notFoundHandler } from './middlewares/notfoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import productRouter from './routes/products.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );

  app.use(cors());

  // app.get('/', (req, res) => {
  //   res.json({
  //     message: 'Hello world!',
  //   });
  // });

  app.use(productRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
