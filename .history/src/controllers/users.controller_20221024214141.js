import getConnection from '../database/database';
import {CREATE_USER, GET_USER} from '../database/queries'

const createUser = async (req, res) => {
    const {email, name, lastname, sub} = req.body
    const connection = await getConnection()
    console.log(connection)
    const users = await connection.query('SHOW TABLES')
    //console.log(users)
    res.json({"Hola": "prueba"})
}


export default {
    createUser
  };
  