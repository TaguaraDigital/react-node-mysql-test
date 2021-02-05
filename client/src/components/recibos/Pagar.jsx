import { useContext } from "react";
import { loadStripe, } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import RecibosFinder from "../../apis/RecibosFinders";
import { AuthContext } from "../../contexts/AuthContext";


const stripePromise = loadStripe("pk_test_51IH9hULbPZwPVRy0NM7zPUokRw3cGYLK3c15uSAkK21EIUxGCw7N9rCvDlFIpfgBun50VbzuB4Qr52Pe7UdJmMTs00mmWHZ3W0");

const CheckoutForm = () => {
    
    const { recibos, setRecibos, monto } = useContext(AuthContext);
    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('datos')

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: element.getElement(CardElement)
        });

        if (!error) {
            console.log(paymentMethod)
            try {
                const response = await RecibosFinder.pagos(paymentMethod, recibos);
                // setRecibos(recibos)
            } catch (err) { }
        
        } else {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card">
            <div className="tarjeta">
                <CardElement />
            </div>
            <button>Pagar Recibos</button>
        </form>                    
    )
}
const Pagar = () => {
    const { recibos, setRecibos, currentUser, monto } = useContext(AuthContext);
    console.log('usuario es ', currentUser)

    return (
        <Elements stripe={stripePromise}>
            <div className="container">
                <h1>{currentUser.email}</h1>
                <h2>Monto a Pagar { monto }</h2>
                <div className="row">

                    <div className="lado-derecho">
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    )
}

export default Pagar
