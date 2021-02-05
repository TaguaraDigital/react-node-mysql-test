import React, { useEffect, useContext, useState } from "react";
import RecibosFinder from "../../apis/RecibosFinders";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const RecibosAll = (props) => {
    const { recibosAll, setRecibosAll, currentUser } = useContext(AuthContext);
    let history = useHistory();
    
    const calcular = (recibos) => {
        const rec = [];
        let sld = currentUser.saldo; // saldo del usuario inicial
 
        recibos.map((recibo, i) => {
        
            
            if (i === 0) {
                rec.push({ ...recibo, saldo: (recibo.status === 1) ? sld : recibo.monto + sld })
            } else {
                rec.push({ ...recibo, saldo: (recibo.status === 1) ? rec[i-1].saldo : recibo.monto + rec[i-1].saldo })
            }
        })
        return rec;
    }

    useEffect(() => {
        const fetchData = async () => {
        
            try {
                const response = await RecibosFinder.all(currentUser.id);
                const recibos = calcular(response.data);
                setRecibosAll(recibos)
            } catch (err) { }
        }

        fetchData();
   
    }, []);

    return (
    <div className="list-group">
        <table className="tabla">
            <caption>Recibos All</caption>
            <thead>
                <tr>
                    <th> Recibo </th>
                    <th> Monto </th>
                    <th> Pagado </th>
                    <th> Fecha Pago </th>
                    <th> Saldo </th>
                    <th> Referencia </th>
                </tr>
            </thead>
        <tbody>
            {recibosAll && recibosAll.map((recibo) => {
                return (
                    <tr
                        // onClick={() => handleRestaurantSelect(recibo.id)}
                        key={recibo.recibo}
                    >
                        <td> {recibo.recibo} </td>
                        <td> {recibo.monto } </td>
                        { (recibo.status === 1) ?<td> {recibo.monto } </td> : <td> {recibo.monto } </td> }
                        { (recibo.status === 1) ?<td> {recibo.date_status } </td> : <td>  -  </td> }
                        <td> {recibo.saldo}  </td>
                        { (recibo.status === 1) ?<td> {recibo.clave } </td> : <td>  -  </td> }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
export default RecibosAll;