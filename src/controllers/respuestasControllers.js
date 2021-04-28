import { response } from "express"
import pool from "../database/connection"
import generateJwt from "../helper/generar-token";



const crearRespuestas = async (req, res = response)=> {
  const data = [ req.body.descripcion, req.body.respuesta, req.body.correcta]
 
  try {
    
    const datos = await pool.query(`INSERT into respuestas(descripcion, id_res, correcta)  VALUES($1, $2, $3) ON CONFLICT DO NOTHING`, data ,(error, results) => {
      if (error) {
        return res.status(400).json({
          error: true,
          message: "error"
      })
        //  throw error
       }
       
    })
    const token = await generateJwt( req.body.descripcion, req.body.correcta );
    return res.status(200).json({
      error: false,
      message: "Exito al registrar",
      token
    })
    
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: "error"
  })
  }
   
}

const actualizarRespuestas = async(req, res = response)=> {
  let { id } = req.params
  const data = [req.body.descripcion,  req.body.respuesta, req.body.correcta]
  try {
    await pool.query(`update  respuestas set descripcion = $1, id_res = $2, correcta = $3 where id = ${req.body.id}`, data ,(error, results) => {
      if (error) {
        return res.status(400).json({
          error: true,
          message: "error"
      })
       }
       
       res.status(200).json({
         error: false,
         message: "Actualizacion correcta"
       })
    })
    
    
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: "error"
  })
}
}



const eliminarRespuestas = async(req, res = response)=> {
  let { id } = req.params
  try {
    await pool.query(`DELETE FROM respuestas where id = ${id}` ,(error, results) => {
      if (error) {
        return res.status(400).json({
          error: true,
          message: "error"
      })
       }
       
       res.status(200).json({
         error: false,
         message: "Eliminada"
       })
    })
    
    
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: "error"
  })
}
}


const obtenerRespuestas = async (req, res  = response) => {

  const client = await pool.connect();
   const result = await client.query(`SELECT pre.descripcion  as "respuesta",res.descripcion,res.correcta, res.id FROM respuestas 
    as res join preguntas as pre on res.id_res = pre.id`
    , (error, results) => {
       if (error) {
        return res.status(400).json({
          error: true,
          message: "error"
      })
       }
       res.status(200).json(results.rows)
       console.log(`El resultado ${result}`);
     })
    
}

const obtenerRespuestaId = async (req, res  = response) => {
  let { id } = req.params
  await pool.query(`SELECT * FROM respuestas where id = ${id}`, (error, results) => {
     if (error) {
      return res.status(400).json({
        error: true,
        message: "error"
    })
     }
     res.status(200).json(results.rows)
   })
  
}

module.exports = {
    crearRespuestas,
    obtenerRespuestas,
    actualizarRespuestas,
    eliminarRespuestas,
    obtenerRespuestaId
}