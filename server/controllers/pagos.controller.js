const dbConnection = require('../database/connections');
const Stripe = require('stripe');

const controllerPagos = {};


//PAGOS
controllerPagos.stripe = async (req, res) => {
    const stripe = new Stripe("sk_test_51IH9hULbPZwPVRy01f0RkPdvV4TRRVCnEAeEh5SuUOE3vz4HrVmURWswqZYiEp79tQHbQE7QPGxevFhk7qssPcxC00PVvzQy41")
    const { payments, recibos } = req.body;

     try {
        const payment = await stripe.paymentIntents.create({
          amount: 25000,
          currency: "USD",
          description: "Cobro de recibos",
          payment_method: payments.id,
          confirm: true, //confirm the payment at the same time
        });
    
        console.log(' resultado del cobro', payment);
    
        return res.status(200).json({
            message: "Successful Payment"
        });
      } catch (error) {
        console.log('hay un error', error);
        return res.json({ message: error.raw.message });
      }

    console.log(' pagos', payments.id)
    console.log(recibos)
    console.log('cancelando los recibos con stripe' )

    // const sql = "INSERT INTO users (email, password) VALUES (?,?)";
    // dbConnection.query(sql, [email, password], (err, result) => {
    //     if (err) {
    //         res.status(400).json({
    //             status: 400,
    //             success: false,
    //             message: err.sqlMessage
    //         })
    //         return;
    //     }
    //     res.status(200).json({
    //         status: 200,
    //         success: true,
    //         userId : result.isertId,
    //         email,
    //         password,
    //         message: "ok"
    //     })
    // })
}

module.exports = controllerPagos;