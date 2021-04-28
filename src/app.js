import express from 'express'
import {json} from 'body-parser'
import morgan from 'morgan'
import cors from "cors"
import preguntasRoute from './routes/preguntasRoutes'
import respuestasRoute from './routes/respuestasRoutes'

const app = express()

/* middlewares */
app.use(morgan('dev'))
app.use(json())
app.use(cors())

//Rutas

app.use('/api/preguntas', preguntasRoute)
app.use('/api/respuestas', respuestasRoute)


export default app
