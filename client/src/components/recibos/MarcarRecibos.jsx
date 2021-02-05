import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";

import RecibosFinder from "../../apis/RecibosFinders";


const Recibos = () => {

    const history = useHistory();

    const { recibos, setRecibos, currentUser, monto, setMonto } = useContext(AuthContext);
    const [recibosState, setRecibosState] = useState([recibos]);

    const calcular_saldos = (recibos) => {
        const rec = [];
        recibos.map((recibo, i) => {
            if (i === 0) {
                rec.push({ ...recibo, saldo: recibo.monto })
            } else {
                rec.push({ ...recibo, saldo: recibo.monto + rec[i-1].saldo })
            }
        })
        return rec;
    }

    
    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await RecibosFinder.all(currentUser.id);
                const recibos_pendientes = calcular_saldos(response.data.filter(recibo => recibo.status === 0));
                const recibos_cancelados = calcular_saldos(response.data.filter(recibo => recibo.status === 1));
                
                const rec = { recibos_pendientes, recibos_cancelados }
                
                setRecibos(rec)
            } catch (err) { }
        }

        fetchData();
   
    }, []);

    const handleCheckBox = (e, id) => {
        
        setMonto(0);
        recibos.recibos_pendientes.map((rec) => {
            if (id === rec.recibo) {
                console.log('check', id)
                rec.status = e.target.checked;
            }
            if (rec.status) setMonto((monto) => monto + rec.monto);
            console.log('monto =', monto)
        })
        
        setRecibosState([recibos]);
    }

    const handlePagar = (e) => {
        e.preventDefault()
        console.log('llamar a la pagina de pagar')
        history.push("/pagar")

    }


    return (
        <div className="list-group">
            <table className="tabla">
                <caption>Recibos Pendientes</caption>
                <thead>
                    <tr>
                        <th> Recibo </th>
                        <th> Monto </th>
                        <th> Pagado </th>
                        <th> Deuda </th>
                        <th> Saldo </th>
                        <th> pagar </th>
                    </tr>
                </thead>
                <tbody>
                    {recibos && recibos.recibos_pendientes.map((recibo) => {
                        return (
                            <tr
                                // onClick={() => handleRestaurantSelect(recibo.id)}
                                key={recibo.recibo}
                            >
                                <td> {recibo.recibo} </td>
                                <td> {recibo.monto} </td>
                                <td> 0,00 </td>
                                <td> {recibo.monto} </td>
                                <td> {recibo.saldo}  </td>
                                <td> <input
                                    type="checkbox"
                                    onChange={(e) => handleCheckBox(e, recibo.recibo)}
                                    checked={recibo.status}
                                /> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {(monto !== 0)
                ? (<div
                    style={
                        {
                            "width": "50%",
                            "margin": "2rem 25%",
                            "border": "1px solid red",
                            "display": "flex",
                            "justifyContent": "space-around",
                            "alignItems": "center"
                        }}
                >
                    <h1> Total a pagar : <span>{monto}</span></h1>
                    <button
                        onClick={handlePagar}    
                    > PAGAR</button>
                    </div>
                )
                : ''
            }
        </div>
    )
} 

export default Recibos;