import { Router } from 'express';
import validateJwt from '../middlewares/jwt';
import preguntasControllers from '../controllers/preguntasControllers';


const router = Router();
router.use( validateJwt )

router.get('/',  preguntasControllers.obtenerPreguntas);
router.post('/',  preguntasControllers.crearPreguntas);
router.get('/:id',  preguntasControllers.obtenerPreguntaId);
router.delete('/:id',  preguntasControllers.eliminarPreguntas);
router.put('/:id',  preguntasControllers.actualizarPreguntas);

export default router;