
import app from './app'

const main = async() =>{
    const port = 8001
    await app.listen(port)
    console.log(`Servidor escuchando en el puerto ${port}`);
}


main()