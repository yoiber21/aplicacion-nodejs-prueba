import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const generateJwt = ( id, nombre ) => {
    const SECRET_JWT_SEED = "Esto-Es-UnA-PaLabr@-SeCReta"
    return new Promise(( resolve, reject )=>{

        const payload = { id, nombre };

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '8h'
        }, ( err, token )=>{
            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' );
            }

            resolve( token )
        } );

    })
}


export default generateJwt;