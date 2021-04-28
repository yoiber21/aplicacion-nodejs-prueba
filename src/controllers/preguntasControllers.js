import { response } from "express"
import pool from "../database/connection"



const crearPreguntas = async (req, res = response)=> {
 const data = [req.body.descripcion]
  try {
    if (req.body.descripcion !== undefined) {
      await pool.query(`INSERT into preguntas(descripcion)  VALUES($1) ON CONFLICT DO NOTHING`, data ,(error, results) => {
        if (error) {
          // console.log(error);
           throw error
         }
         
       
      })
      console.log(req.body.descripcion);
      return res.status(200).json({
        error: false,
        message: "Exito al registrar",
      })
      
    }
    return res.status(400).json({
      error: true,
      message: "Error al registrar",
    })
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: "Error al registrar",
  })
  }
   
}

const actualizarPreguntas = async(req, res = response)=> {
  let { id } = req.params
  const data = [req.body.descripcion]
  console.log(req.body);
  try {
    await pool.query(`update  preguntas set descripcion = $1 where id = ${id}`, data ,(error, results) => {
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



const eliminarPreguntas = async(req, res = response)=> {
  let { id } = req.params
  try {
    await pool.query(`DELETE FROM preguntas where id = ${id}` ,(error, results) => {
      if (error) {
        return res.status(400).json({
          error: true,
          message: "error"
      })
         throw error
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


const obtenerPreguntas = async (req, res  = response) => {
    await pool.query('SELECT * FROM preguntas', (error, results) => {
       if (error) {
        console.log(error);
         throw error
       }
       res.status(200).json(results.rows)
     })
    
}

const obtenerPreguntaId = async (req, res  = response) => {
  let { id } = req.params
  await pool.query(`SELECT * FROM preguntas where id = ${id}`, (error, results) => {
     if (error) {
      console.log(error);
       throw error
     }
     res.status(200).json(results.rows)
   })
  
}

module.exports = {
    crearPreguntas,
    obtenerPreguntas,
    actualizarPreguntas,
    eliminarPreguntas,
    obtenerPreguntaId
}