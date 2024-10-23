import { Router } from 'express';
import { registerUserSchema } from '../validation/user.js';
import { loginUserSchema } from '../validation/user.js';
import { validateBody } from '../utils/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  logoutController,
  refreshUserController,
  registerUserController,
} from '../controllers/user.js';
import { loginUserController } from '../controllers/user.js';
import { authenticate } from '../middlewares/authenticate.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

authRouter.post('/logout', authenticate, ctrlWrapper(logoutController));

authRouter.post('/current', authenticate, ctrlWrapper(refreshUserController));

export default authRouter;
