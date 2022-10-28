import authRouter from '@/routes/auth';
import indexRouter from '@/routes/index';
import csaRouter from '@/routes/csa';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/auth', authRouter);
  app.use('/csa', csaRouter);
}
