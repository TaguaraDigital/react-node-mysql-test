const dbConnection = require('../database/connections');
const controller = {};


controller.recibos = (req, res) => {

    const { user_id } = req.body;
    sql = `SELECT * FROM recibos WHERE user_id=${user_id}`;
    dbConnection.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ message: err });
            return;
        }
        if (result.length) {
            res.status(200).json({
                status: 200,
                success: true,
                data: result,
            })
        } else {
            res.status(400).json({
                status: 400,
                success: false,
                message: "user no have recibos"
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