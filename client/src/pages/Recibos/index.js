import React, {useState, useContext, useEffect} from 'react';
import Header from '../../components/Header'

import { AuthContext } from '../../contexts/AuthContext';
import RecibosPendientes from '../../components/recibos/RecibosPendientes';
import RecibosAll from '../../components/recibos/RecibosAll';
import Pagar from '../../components/recibos/Pagar';
import MarcarRecibos from '../../components/recibos/MarcarRecibos';
let recibos = {}

const Recibos = () => {

    const { currentUser, recibos, setRecibos } = useContext(AuthContext);

    const [saldo, setSaldo] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
      
    return (
        <div className="flex">
            <Header page="clientes" />
            <h1>Estamos en la pagina de recibos los clientes
             <br />
            y para llegar aqui se debe autenticado</h1>
            <h2>Welcome {currentUser.email} </h2>
            <h2> El saldo inicia de {currentUser.email} es:  {currentUser.saldo} </h2>
            {/* <RecibosPendientes /> */}
            <MarcarRecibos />
            {/* <Pagar /> */}
            <h1>Todos los recibos</h1>
            <RecibosAll />
        </div>
    )
}

export default Recibos