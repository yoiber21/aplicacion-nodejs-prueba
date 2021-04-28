
import app from './app'

const main = async() =>{
    const port = process.env.PORT
    await app.listen(port)
    console.log(`Servidor escuchando en el puerto ${port}`);
}


main()