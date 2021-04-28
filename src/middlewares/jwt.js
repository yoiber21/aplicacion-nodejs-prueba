import { response } from "express";
import jwt from "jsonwebtoken";



const validateJwt = ( req, res = response, next ) => {
    const SECRET_JWT_SEED = "Esto-Es-UnA-PaLabr@-SeCReta"
    const token = req.header('x-token');


    if ( !token ) {
        return res.status(401).json({
            error: true,
            message: 'No hay token en la peticion'
        });
    }
    try {
        
        const { descripcion,correcta } = jwt.verify(
            token,
            SECRET_JWT_SEED
        );
         
        req.descripcion = descripcion;
        req.correcta = correcta;
        // console.log(req);

        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error: true,
            message: 'token no valido'
        });
    }
    next();
}


export default validateJwt;