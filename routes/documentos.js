import routerx from 'express-promise-router';
//const routerx=require('express-promise-router');
import documentosController from '../controllers/DocumentosController';
//const categoriaController=require('../controllers/categoriaController');
import auth from '../middlewares/auth';
//const auth=require('../middlewares/auth');

const router = routerx();

router.post('/add', documentosController.add);
router.get('/query', documentosController.query);
router.get('/listDocumentos', documentosController.listDocumentos);
router.get('/list', documentosController.list);
router.get('/listDocumentosPrimerForo', documentosController.listDocumentosPrimerForo);
router.get('/listDocumentosSegundoForo', documentosController.listDocumentosSegundoForo);
router.get('/listDocumentosBlindaje', documentosController.listDocumentosBlindaje);
router.get('/descargame/:id', documentosController.descargame);
router.put('/update', documentosController.update);
router.delete('/remove', documentosController.remove);
router.put('/activate', documentosController.activate);
router.put('/deactivate', documentosController.deactivate);

//module.exports = router;
export default router;