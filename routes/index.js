import routerx from 'express-promise-router';
import usuarioRouter from './usuario';
import documentosRouter from './documentos';
import repositoriosRouter from './repositorios';


const router=routerx();


router.use('/usuario',usuarioRouter);
router.use('/documentos',documentosRouter);
router.use('/repositorios',repositoriosRouter);
export default router;

