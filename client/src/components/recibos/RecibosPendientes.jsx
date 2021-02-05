import React, { useEffect, useContext, useState } from "react";
import RecibosFinder from "../../apis/RecibosFinders";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const RecibosPendientes = (props) => {
    const { recibos, setRecibos, currentUser } = useContext(AuthContext);
    let history = useHistory();
    
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
                        <td> {recibo.monto } </td>
                        <td> 0,00 </td>
                        <td> { recibo.monto} </td>
                        <td> {recibo.saldo}  </td>
                        <td> <input type="checkbox" /> </td>
                        {/* <td>
                    <button
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td> */}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
export default RecibosPendientes;