import teacher from './route/teacher.routes.js';

const routes = (app) => {
  app.use('/api/teacher', teacher);
}

export { routes };