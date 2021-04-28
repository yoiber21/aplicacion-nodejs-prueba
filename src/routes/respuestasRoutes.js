import { Router } from 'express';
import validateJwt from '../middlewares/jwt';
import respuestasControllers from '../controllers/respuestasControllers';


const router = Router();

router.post('/',  respuestasControllers.crearRespuestas);

router.use( validateJwt )

router.get('/',  respuestasControllers.obtenerRespuestas);
router.get('/:id',  respuestasControllers.obtenerRespuestaId);
router.delete('/:id',  respuestasControllers.eliminarRespuestas);
router.put('/:id',  respuestasControllers.actualizarRespuestas);


export default router;