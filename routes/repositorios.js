import routerx from 'express-promise-router';
//const routerx=require('express-promise-router');
import repositoriosController from '../controllers/RepositoriosController';
//const categoriaController=require('../controllers/categoriaController');
import auth from '../middlewares/auth';
//const auth=require('../middlewares/auth');

const router = routerx();

router.post('/add', repositoriosController.add);
router.get('/list', repositoriosController.list);
router.get('/query', repositoriosController.query);
router.get('/listDocumentos', repositoriosController.listDocumentos);
router.get('/listDocumentosPrimerForo', repositoriosController.listDocumentosPrimerForo);
router.get('/listDocumentosSegundoForo', repositoriosController.listDocumentosSegundoForo);
router.get('/listDocumentosBlindaje', repositoriosController.listDocumentosBlindaje);
router.put('/update', repositoriosController.update);
router.delete('/remove', repositoriosController.remove);
router.put('/activate', repositoriosController.activate);
router.put('/deactivate', repositoriosController.deactivate);

//module.exports = router;
export default router;