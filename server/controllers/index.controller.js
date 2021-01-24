const dbConnection = require('../database/connections');
const controller = {};

//incluye un usuario en la base de datos
controller.create = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sql = "INSERT INTO users (email, password) VALUES (?,?)";
    dbConnection.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(400).json({
                status: 400,
                success: false,
                message: err.sqlMessage
            })
            return;
        }
        res.status(200).json({
            status: 200,
            success: true,
            userId : result.isertId,
            email,
            password,
            message: "ok"
        })
    })
}

// consulta un usuario
controller.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
 
    const sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`;
    dbConnection.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(400).json({ message: err });
            return;
        }
        if (result.length) {
            res.status(200).json({
                status: 200,
                success: true,
                userId: result[0].id,
                email: result[0].email,
                password: result[0].password,
                message: "ok"
            })
        } else {
            res.status(400).json({
                status: 400,
                success: false,
                message: " Wrong credentials invalid email or password"
            })
        }
    })
}

controller.user = (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    const sql = `SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
    dbConnection.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(400).json({ message: err });
            return;
        }
        if (result.length) {
            res.status(200).json({
                status: 200,
                success: true,
                userId: result[0].id,
                email: result[0].email,
                password: result[0].password,
            })
        } else {
            res.status(400).json({
                status: 400,
                success: false,
                message: "user no found"
            })
        }
    });
}

controller.users = (req, res) => {
    const sql = "SELECT * FROM users";
    dbConnection.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ message: err });
            return;
        }
        
        if (result.length) {
            res.status(200).json({
                status: 200,
                success: true,
                result: result.length,
                users: result,            
            })
        } else res.json({ message: "wrong credential" })
    })
}

module.exports = controller;