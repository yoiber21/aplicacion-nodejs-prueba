import { Router } from 'express';
import validateJwt from '../middlewares/jwt';
import respuestasControllers from '../controllers/respuestasControllers';


const router = Router();

router.post('/',  respuestasControllers.crearRespuestas);
router.get('/',  respuestasControllers.obtenerRespuestas);
router.use( validateJwt )


router.get('/:id',  respuestasControllers.obtenerRespuestaId);
router.delete('/:id',  respuestasControllers.eliminarRespuestas);
router.put('/:id',  respuestasControllers.actualizarRespuestas);


export default router;